import React from 'react';
import {hydrateRoot} from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = hydrateRoot(container, <App />);