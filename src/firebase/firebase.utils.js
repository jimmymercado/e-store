import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyAS-Rdf2uyckWuPeTix7VOSgm2MwQqAwV8",
	authDomain: "e-store1-3b572.firebaseapp.com",
	databaseURL: "https://e-store1-3b572.firebaseio.com",
	projectId: "e-store1-3b572",
	storageBucket: "e-store1-3b572.appspot.com",
	messagingSenderId: "913517254976",
	appId: "1:913517254976:web:4bd19ade2ab3305123c2a5",
	measurementId: "G-1F747BFZ1T"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase
