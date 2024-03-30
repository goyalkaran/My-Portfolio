import {initializeApp} from "firebase/app";
import {getAnalytics, isSupported} from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCX9_Q0h590bD5uQjDHUIPqxki5y8uK9NE",
    authDomain: "my-portfolio-bc500.firebaseapp.com",
    projectId: "my-portfolio-bc500",
    storageBucket: "my-portfolio-bc500.appspot.com",
    messagingSenderId: "35866821167",
    appId: "1:35866821167:web:c67ce16e66521cf696fcda",
    measurementId: "G-168GS1XMPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = await isSupported() ? getAnalytics(app) : null;

export {analytics}