const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCUeWYxp01V1LOe0v4V6wk8vb5WKDQMbE0",
  authDomain: "facebook-clone-1b2ed.firebaseapp.com",
  projectId: "facebook-clone-1b2ed",
  storageBucket: "facebook-clone-1b2ed.appspot.com",
  messagingSenderId: "368370436991",
  appId: "1:368370436991:web:94ae838c8c11f6bd6ea84a",
  measurementId: "G-XMTTQKCWL0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
