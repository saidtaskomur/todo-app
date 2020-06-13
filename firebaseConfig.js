import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCXv-EtKn1KQDn1C1ZLCOYxXGGJNUr5c3E',
  authDomain: 'said-taskomur-todo-app.firebaseapp.com',
  databaseURL: 'https://said-taskomur-todo-app.firebaseio.com',
  projectId: 'said-taskomur-todo-app',
  storageBucket: 'said-taskomur-todo-app.appspot.com',
  messagingSenderId: '329669427923',
  appId: '1:329669427923:web:99a2ff92845de9bff20a26',
};

firebase.initializeApp(config);

// firebase utils
const db = firebase.database();
const auth = firebase.auth();
const { currentUser } = auth;

// date issue fix according to firebase
// firebase collections
const listCollection = db.ref('list');
// const postsCollection = db.collection('posts');
// const commentsCollection = db.collection('comments');
// const likesCollection = db.collection('likes');

export {
  db,
  auth,
  currentUser,
  listCollection,
  // postsCollection,
  // commentsCollection,
  // likesCollection,
};
