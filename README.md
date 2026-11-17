# IMPACT Mount Pilgrim Baptist Church   [![Build Status](https://travis-ci.com/CharleeJennings/IMPACT.svg?token=sSSkGmYahwoaDJ6KMqFD&branch=master)](https://travis-ci.com/CharleeJennings/IMPACT)

## Mission
+ This web application is used for student tracking and rewards system for my personal church


## Targeted node-forge security patch

Use npm 8.3.0 or newer: `overrides` pins both legacy consumers (`firebase-admin`
and `google-p12-pem`) to node-forge 1.4.1 for CVE-2026-119192. The existing
Firebase versions are deliberately unchanged. The v1 lockfile was regenerated
with npm 11.9.0; no package versions other than node-forge were upgraded.

Install with `npm ci --legacy-peer-deps`. Run the offline compatibility check
with `node scripts/check-node-forge.cjs` on Node 16 or newer. It uses synthetic
keys to check Firebase credential parsing and PKCS#12 conversion; it does not
contact Firebase or exercise an exploit.

Known validation blocker: the existing `social-media-icons-react@1.0.10`
tarball returns HTTP 404 from npm, preventing a full clean install and therefore
full application tests/build. The targeted compatibility check was validated
in isolation with firebase-admin 8.12.0, google-p12-pem 2.0.4 and the override.
This is not a claim of full application compatibility or deployment readiness.
