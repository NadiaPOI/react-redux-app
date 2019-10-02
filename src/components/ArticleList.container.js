/* eslint-disable import/no-cycle */
import { connect } from 'react-redux';
import ArticleList from './ArticleList';

const mapStateToProps = ({ articles }) => ({
  articles,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleList);
