import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <h1>Hello World</h1>
        <p>all redux state is below</p>
        <p>{JSON.stringify(this.props.state)}</p>
      </Fragment>
    );
  }
}


const dispatchStateToProps = state => ({ state });

export default connect(dispatchStateToProps, null)(Dashboard)
