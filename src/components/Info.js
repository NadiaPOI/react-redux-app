import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import NumberOfSelectedArticles from './NumberOfSelectedArticles';
import Weight from './Weight';

const getSelectedArticlesTotalWeight = articles =>
  articles
    .filter(article => article.isSelected)
    .reduce((sum, article) => sum + article.weight, 0);

const getNumberOfSelectedArticles = articles =>
  articles.filter(article => article.isSelected).length;

const Info = ({ articles }) => (
  <Fragment>
    <NumberOfSelectedArticles value={getNumberOfSelectedArticles(articles)} />
    <Weight value={getSelectedArticlesTotalWeight(articles)} />
  </Fragment>
);

Info.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default Info;
