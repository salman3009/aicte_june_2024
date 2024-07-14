import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import dataReducer from './reducers';
import {watchFetchData} from './sagas';
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();

const central = configureStore({
  reducer:dataReducer,
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(watchFetchData);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={central}>
    <App />
 </Provider>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
