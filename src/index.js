import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Dashboard } from './components/Dashboard';



const store =configureStore();
store.subscribe(()=>store.getState());
const jsx=(<Provider store={store}>
                <Dashboard />
            </Provider>);


ReactDOM.render(jsx,document.getElementById('root'));

serviceWorker.unregister();
