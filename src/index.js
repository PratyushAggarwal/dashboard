import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Map from './Components/Map';
import Card1s from './Components/Card1s';
import ApexChart2 from './Components/ApexChart2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='wrapper'>
        <div className='content-page'>
            <div className='content'>
                <Card1s />
                <ApexChart2 />
            </div>
        </div>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
