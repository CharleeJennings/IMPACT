// Offline compatibility smoke test for the legacy consumers of node-forge.
// Only synthetic keys are used. No Firebase app, account, or network is involved.
const assert = require('assert');
const crypto = require('crypto');
const fs = require('fs');
const os = require('os');
const path = require('path');
const forge = require('node-forge');
const admin = require('firebase-admin');
const p12 = require('google-p12-pem');

async function main() {
  for (const parent of ['firebase-admin', 'google-p12-pem']) {
    const parentDir = path.dirname(require.resolve(parent));
    const version = require(require.resolve('node-forge/package.json', { paths: [parentDir] })).version;
    assert.strictEqual(version, '1.4.1', `${parent} must use patched node-forge`);
  }
  const { privateKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });
  const pem = privateKey.export({ type: 'pkcs1', format: 'pem' });
  assert.ok(admin.credential.cert({ projectId: 'offline-test', clientEmail: 'test@example.invalid', privateKey: pem }));
  const key = forge.pki.privateKeyFromPem(pem);
  const container = forge.pkcs12.toPkcs12Asn1(key, null, 'notasecret', {
    algorithm: '3des', friendlyName: 'privatekey'
  });
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'impact-forge-'));
  try {
    const file = path.join(dir, 'synthetic.p12');
    fs.writeFileSync(file, Buffer.from(forge.asn1.toDer(container).getBytes(), 'binary'), { mode: 0o600 });
    const converted = forge.pki.privateKeyFromPem(await p12.getPem(file));
    assert.strictEqual(converted.n.toString(16), key.n.toString(16));
    assert.strictEqual(converted.d.toString(16), key.d.toString(16));
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  console.log('PASS: node-forge 1.4.1, Firebase credential parsing, and PKCS#12 conversion');
}
main().catch(error => { console.error(error); process.exitCode = 1; });
