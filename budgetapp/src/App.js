import logo from './logo.svg';
import './App.css';
import React from 'react'
import {GlobalContext} from './contexts/GlobalContext.js';
import GlobalProvider  from './contexts/GlobalContext.js';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <React.Fragment>
    <GlobalProvider>
    <Dashboard>

    </Dashboard>
</GlobalProvider>
    </React.Fragment>
  );
}

export default App;
