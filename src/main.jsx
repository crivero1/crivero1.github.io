import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter, BrowserRouter, Routes, Route } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './pages/layout.jsx';
import HomePage from './pages/home.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // <HashRouter>
  //   <App />
  // </HashRouter>
);
