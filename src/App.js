import NewsFeed from './components/NewsFeed/NewsFeed';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import React from 'react';

const App = () => {
  return (
    <div className='app'>
      <CurrencyConverter />
      <NewsFeed />
    </div>
  );
}

export default App;
