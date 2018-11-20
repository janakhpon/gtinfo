

import Rebase from 're-base';
import firebase from 'firebase';

var app = firebase.initializeApp({
    apiKey: "AIzaSyC0peg_nJUjkCYxbJx8CWZf6vuXQdMmBrQ",
    authDomain: "reactstarter-8914d.firebaseapp.com",
    databaseURL: "https://reactstarter-8914d.firebaseio.com",
    projectId: "reactstarter-8914d",
    storageBucket: "reactstarter-8914d.appspot.com",
    messagingSenderId: "954995141688"
})

var db = firebase.database(app);
var base = Rebase.createClass(db);

export default base;

