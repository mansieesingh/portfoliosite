import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainSection from './components/MainSection';
import SecondarySection from './components/secondarySection/index';

function App() {
  return (
    <div className="container">
        <Sidebar />
        <MainSection />
        <SecondarySection />
    </div>
  );
}

export default App;
