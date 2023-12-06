import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, UserCredential, signInWithEmailAndPassword } from "firebase/auth";

import constants from './constants';
interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
}

const firebaseConfig : FirebaseConfig = {
    apiKey: 'AIzaSyB2FKP0oaAeLPa96h_SI7fFi4KEEaWrvxI',
    authDomain: "wordsmith-auth.firebaseapp.com",
    projectId: "wordsmith-auth",
    storageBucket: "wordsmith-auth.appspot.com",
    messagingSenderId: "315192723360",
    appId: "1:315192723360:web:733126e071a610640546c5",
    measurementId: "G-WHP68FVH93",
}

initializeApp(firebaseConfig);
const fireBaseAuth = getAuth();
const GoogleProvider = new GoogleAuthProvider();


const SignUpWithGooglePopUp = async (setError : (msg : string) => void, login = true) => {
    try {
        const result = await signInWithPopup(fireBaseAuth, GoogleProvider);
        const user = result.user;
        if (!user || !user.email || !user.displayName || !user.uid) {
            throw new Error('Error creating account');
        }
        if (!login) {
            const response = await fetch(`${constants.serverUrl}${constants.endpoints.googleSignUp}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: user.email, name: user.displayName, firebaseUID: user.uid }),
            });
            if (!response.ok) {
                throw new Error('Error creating account');
            }
        };
        window.location.href = constants.routes.defaultAuthenticatedRoute;
    } catch (error) {
        //@ts-ignore
        if (error.code === 'auth/account-exists-with-different-credential' && !login) {
            setError(`Account already exists with email`)
        } else {
            // Handle other errors
            setError(`Error ${login ? 'logging in' : 'creating account'} with Google`)
        }
    }
};

const LogInWithEmail = async (setError : (msg : string) => void, email : string, password : string, navigate : boolean = true) => {
    try {
        const user : UserCredential = await signInWithEmailAndPassword(fireBaseAuth, email, password);
        if (!user) {
            throw new Error('Cannot find user with this email or password');
        }
        if (!navigate) return;
        window.location.href = constants.routes.defaultAuthenticatedRoute;
    } catch (error) {
        setError(`Error logging in with email`)
        return;
    }
}


export { GoogleProvider, fireBaseAuth, SignUpWithGooglePopUp, LogInWithEmail };