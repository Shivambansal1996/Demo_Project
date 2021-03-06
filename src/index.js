import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import 'bootstrap/dist/css/bootstrap.min.css';


const rootReducer = combineReducers({
    form: formReducer
});
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
     <App />
    </Provider>
    ,document.getElementById('root'));