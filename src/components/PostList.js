import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  render() {
    this.props.fetchPosts();
    return(
      <div>Post list</div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {};
};

export default connect(
  mapStateToProps,
  {fetchPosts}
)(PostList);
