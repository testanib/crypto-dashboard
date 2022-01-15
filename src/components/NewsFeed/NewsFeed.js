import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewsFeed.module.scss';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react/cjs/react.development';

const NewsFeed = () => {

  const [articles, setArticles] = useState(null);

  useEffect(() => {
    var axios = require("axios").default;

    var options = {
      method: 'GET',
      url: 'https://crypto-news-live3.p.rapidapi.com/news',
      headers: {
        'x-rapidapi-host': 'crypto-news-live3.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
      }
    };

    axios.request(options).then(function (response) {
      // console.log(response.data);
      setArticles(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  },  []);

  const firstTwentyFive = articles?.slice(0,25);

  return (
    <div className={styles.NewsFeed}>
      <h2>News Feed</h2>
      {firstTwentyFive?.map((article, _index) => (
        <div key={_index}>
          <a href={article.url}><p>{article.title}</p></a>
        </div>))}
    </div>
  )
}

NewsFeed.propTypes = {};

NewsFeed.defaultProps = {};

export default NewsFeed;
