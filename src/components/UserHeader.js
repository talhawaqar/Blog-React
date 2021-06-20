import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
  render() {
    if(!this.props.user) {
      return null;
    }
    return <div className="header"> {this.props.user.name} </div>;
  }
}

const mapStateToProps = (state, ownState) => {
  return {
    user: state.users.find(user => user.id === ownState.userId),
  }
};

export default connect(mapStateToProps)(UserHeader);
