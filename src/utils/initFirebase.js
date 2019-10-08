import { firebase as fbConfig } from '../config';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

export function initFirebase() {
  if (firebase.apps.length === 0) {
    // Init Firebase
    firebase.initializeApp(fbConfig);
  }
  return firebase;
}

export default initFirebase;
