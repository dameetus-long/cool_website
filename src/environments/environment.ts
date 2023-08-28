// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
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
  production: false, // true for environment.prod.ts
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
