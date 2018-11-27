import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
//import DisplayPageContainer from './container/DisplayPageContainer';
import { Dashboard } from './components/Dashboard';
//import { startAddItem } from './actions/addEdit';

console.log("calling configureStore from index.html");
const store =configureStore();
store.subscribe(()=>store.getState());
console.log(store.getState());
//store.dispatch(startAddItem({"first_name":"Surendra","last_name":"Choudhary"}));
const jsx=(<Provider store={store}>
                <Dashboard />
            </Provider>);


ReactDOM.render(jsx,document.getElementById('root'));

console.log("index.js called,App rendered");

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
