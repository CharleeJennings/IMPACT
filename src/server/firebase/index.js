import firebaseConfig from "./config";
import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import firebase from "firebase";

class Firebase {
	constructor() {
		if (!firebase.apps.length) {
			app.initializeApp(firebaseConfig);
		}

		this.auth = app.auth();
		this.db = firebase.firestore();
	}
	doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
	user = (uid, day, fname, lname) =>
		this.db.collection("users").doc(uid).set({
			birthday: day,
			points: 0,
			firstname: fname,
			lastname: lname,
			role: "student",
			lastLogin: null,
		});
	providerUser = (uid, name) =>
		this.db.collection("users").doc(uid).set({
			points: 0,
			role: "student",
			name: name,
		});

	doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
	doSignOut = () => this.auth.signOut();
}

export default Firebase;
