import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Comics from './components/Comics';
import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Comics />
    </React.StrictMode>
);


reportWebVitals();
