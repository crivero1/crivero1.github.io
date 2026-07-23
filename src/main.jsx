import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter, BrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
// import Layout from './components/layout.jsx';
import HomePage from './pages/home.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // <HashRouter basename='https://crivero1.github.io/#'>
  // <HashRouter>
  //   <App />
  // </HashRouter>
);
