import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCNTX4kFs4zqwVyrbnluRswSP2DVelnv-k",
    authDomain: "btc-wallet2-5a2c4.firebaseapp.com",
    databaseURL: "https://btc-wallet2-5a2c4.firebaseio.com",
    projectId: "btc-wallet2-5a2c4",
    storageBucket: "",
    messagingSenderId: "879148142623"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
