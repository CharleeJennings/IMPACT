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
	user = (uid, day, fname, lname) => {
		this.db
			.collection("users")
			.doc(uid)
			.set({
				uid: uid,
				birthday: day,
				points: 0,
				firstname: fname,
				lastname: lname,
				role: "student",
				lastLogin: null,
				name: `${fname} ${lname}`,
			});
	};
	providerUser = (uid, name) => {
		this.db
			.collection("users")
			.doc(uid)
			.get()
			.then((data) => {
				if (data.exists) {
					return;
				} else {
					this.db.collection("users").doc(uid).set({
						points: 0,
						uid: uid,
						role: "student",
						name: name,
					});
				}
			});
	};

	doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
	doSignOut = () => {
		this.auth.signOut();
	};
}

export default Firebase;
