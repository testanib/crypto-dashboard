import React from 'react';
import PropTypes from 'prop-types';
import styles from './CurrencyConverter.module.scss';
import ExchangeRate from '../ExchangeRate/ExchangeRate';
import { useState } from 'react';
import axios from 'axios';

//ideally have script running on server daily to get latest crypto coins

const CurrencyConverter = () => {
  const currencies = ['BTC', 'ETH', 'BNB', 'USD', 'SOL', 'ADA', 'XRP', 'LUNA', 'DOT', 'DOGE', 'SHIB', 'AVAX', 'MATIC', 'LINK'];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC');
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC');
  const [amount, setAmount] = useState(1);
  // const [exchangeRate, setExchangeRate] = useState(0);
  const [result, setResult] = useState(0);
  // const [primaryCurrencyExchanged, setPrimaryCurrencyExchanged] = useState('BTC');
  // const [secondaryCurrencyExchanged, setSecondaryCurrencyExchanged] = useState('BTC');

  const [exchangedData, setExchangedData] = useState({
    primaryCurrency: 'BTC',
    secondaryCurrency: 'BTC',
    exchangeRate: 0
  });

  function convert() {
    var axios = require("axios").default;
    var options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency},
      headers: {
        'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
      }
    };

    axios.request(options).then(function (response) {
      // console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
      // setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
      setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount);
      // setPrimaryCurrencyExchanged(chosenPrimaryCurrency);
      // setSecondaryCurrencyExchanged(chosenSecondaryCurrency);
      setExchangedData({
        primaryCurrency: chosenPrimaryCurrency,
        secondaryCurrency: chosenSecondaryCurrency,
        exchangeRate: response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']
      })
    }).catch(function (error) {
      console.error(error);
    });
  }

  return(
    <div className={styles.CurrencyConverter}>
    <div className={styles.inputBox}>
      <h2>Currency Converter</h2>
      <table>
        <tbody>
          <tr>
            <td>Primary Currency:</td>
            <td>
              <input
                type='number'
                name='currency-amount-1'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </td>
            <td>
              <select name='currency-1'
                value={chosenPrimaryCurrency}
                name='currency-1'
                className={styles.currencySelect}
                onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
              >
                {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Secondary Currency:</td>
            <td>
              <input
                type='number'
                name='currency-amount-2'
                value={result}
                disabled={true}
                onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
              />
            </td>
            <td>
              <select name='currency-2'
                value={chosenSecondaryCurrency}
                name='currency-2'
                className={styles.currencySelect}
                onChange={(e) => {
                  setChosenSecondaryCurrency(e.target.value);
                }}
              >
                {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <button id="covert-button" onClick={convert}>Convert</button>
    </div>
    
    
    <ExchangeRate 
      exchangedData={exchangedData}
    />
  </div>
  )
}

CurrencyConverter.propTypes = {};

CurrencyConverter.defaultProps = {};

export default CurrencyConverter;
