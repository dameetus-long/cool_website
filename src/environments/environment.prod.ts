import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  firebase: {
    projectId: 'the-cool-website-v1',
    appId: '1:592371788930:web:2581e8738f1a3b665cd89b',
    storageBucket: 'the-cool-website-v1.appspot.com',
    apiKey: 'AIzaSyB7WfrsPlL67puKsG-b0xuYQKTHve4hXQI',
    authDomain: 'the-cool-website-v1.firebaseapp.com',
    messagingSenderId: '592371788930',
    measurementId: 'G-KWFKFGV1CY',
  },
  production: true, // true for environment.prod.ts
  firebaseConfig: {
    apiKey: "AIzaSyB7WfrsPlL67puKsG-b0xuYQKTHve4hXQI",
    authDomain: "the-cool-website-v1.firebaseapp.com",
    projectId: "the-cool-website-v1",
    storageBucket: "the-cool-website-v1.appspot.com",
    messagingSenderId: "592371788930",
    appId: "1:592371788930:web:2581e8738f1a3b665cd89b",
    measurementId: "G-KWFKFGV1CY"
  },
};
