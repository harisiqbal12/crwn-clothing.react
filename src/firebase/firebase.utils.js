import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBrLEMPkWq4dSu1p46CYSZFMlDQDc_lWSE',
	authDomain: 'react-crwn-db-66c21.firebaseapp.com',
	projectId: 'react-crwn-db-66c21',
	storageBucket: 'react-crwn-db-66c21.appspot.com',
	messagingSenderId: '745124552116',
	appId: '1:745124552116:web:16dd4c8dd73a198bd3a6e1',
	measurementId: 'G-Q31KMX5QVP',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({ displayName, email, createdAt, ...additionalData });
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
