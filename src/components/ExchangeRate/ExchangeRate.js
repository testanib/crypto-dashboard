import React from 'react';
import PropTypes from 'prop-types';
import styles from './ExchangeRate.module.scss';

const ExchangeRate = ({exchangedData}) => (
  <div className={styles.ExchangeRate}>
    <h3>Exchange Rate {exchangedData.primaryCurrency} to {exchangedData.secondaryCurrency}</h3>
    <h1>{exchangedData.exchangeRate}</h1>
    
  </div>
);

ExchangeRate.propTypes = {};

ExchangeRate.defaultProps = {};

export default ExchangeRate;
