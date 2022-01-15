import NewsFeed from './components/NewsFeed/NewsFeed';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import React from 'react';

const App = () => {
  return (
    <div className='app'>
      <h1>Crypto Dashboard</h1>
      <div className='app-wrapper'>
        <CurrencyConverter />
        <NewsFeed />
      </div>
      
    </div>
  );
}

export default App;
