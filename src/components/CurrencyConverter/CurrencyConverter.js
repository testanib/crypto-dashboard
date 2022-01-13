import React from 'react';
import PropTypes from 'prop-types';
import styles from './CurrencyConverter.module.scss';
import ExchangeRate from '../ExchangeRate/ExchangeRate';

const CurrencyConverter = () => (
  <div className={styles.CurrencyConverter}>
    <div className={styles.inputBox}>
      <h2>Currency Converter</h2>
      <table>
        <body>
          <tr>
            <td>Primary Currency:</td>
            <td>
              <input
                type='number'
                name='currency-amount-1'
                value={""}
              />
            </td>
            <td>
              <select name='currency-1'
                value={""}
                name='currency-1'
                className={styles.currencySelect}
              >
                <option></option>
              </select>
            </td>
          </tr>
        </body>
      </table>
    </div>
    
    
    <ExchangeRate />
  </div>
);

CurrencyConverter.propTypes = {};

CurrencyConverter.defaultProps = {};

export default CurrencyConverter;
