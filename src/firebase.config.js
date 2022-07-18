
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";	

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxmAsO052l0Q2gRiohRa7okZIRWDokJEs",
  authDomain: "house-marketplace-app-11e94.firebaseapp.com",
  projectId: "house-marketplace-app-11e94",
  storageBucket: "house-marketplace-app-11e94.appspot.com",
  messagingSenderId: "558158153202",
  appId: "1:558158153202:web:2c6658bc82df13ae95576b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore()