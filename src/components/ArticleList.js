import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-cycle
import ArticleContainer from './Article.container';

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(article => (
      <ArticleContainer
        key={article.name}
        isSelected={article.isSelected}
        name={article.name}
        weight={article.weight}
      />
    ))}
  </ul>
);

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default ArticleList;
