import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Test from './pages/Test';
import { AuthProvider } from './util/auth';
import Dashboard from './pages/Dashboard';
import RequireAuth from './util/RequireAuth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='test' element={<Test />} />
          <Route path='admin' element={<Admin />} />
          <Route path='dashboard/*' element={<RequireAuth><Dashboard /></RequireAuth>} />
          <Route path='*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
