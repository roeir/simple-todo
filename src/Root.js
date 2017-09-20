import React from 'react';
import firebase from 'firebase';

import App from './App';

import configureStore from './store/configureStore';

const store = configureStore();

const config = {
  apiKey: 'AIzaSyD-fKWXYLRWlVf3lfXns7WGJd__m_tvtKk',
  authDomain: 'todo-9e276.firebaseapp.com',
  databaseURL: 'https://todo-9e276.firebaseio.com',
  projectId: 'todo-9e276',
  storageBucket: 'todo-9e276.appspot.com',
  messagingSenderId: '994311229122'
};

!firebase.apps.length
    ? firebase.initializeApp(config)
    : firebase.app();

const Root = () => (
  <App store={store} />
);

export default Root;
