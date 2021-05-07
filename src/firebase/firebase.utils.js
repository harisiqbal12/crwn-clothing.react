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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
