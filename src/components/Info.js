/* eslint-disable import/no-cycle */
import React, { Fragment } from 'react';
import NumberOfSelectedArticlesContainer from './NumberOfSelectedArticles.container';
import WeightContainer from './Weight.container';

const Info = () => (
  <Fragment>
    <NumberOfSelectedArticlesContainer />
    <WeightContainer />
  </Fragment>
);

export default Info;
