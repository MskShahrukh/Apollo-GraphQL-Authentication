import React, { Component } from 'react';
import App from './App';
import { graphql } from 'react-apollo';

import query from '../queries/CurrentUser';

class Dashboard extends Component {
  renderUserData() {
    const data = this.props.data;

    if (data.loading) {
      return <div>loading...</div>;
    }
    if (data.user) {
      return (
        <div>
          <div>
            <img className="display-picture " src={data.user.displayPicture} />
          </div>
          <h3>
            <b>{data.user.name}</b>
          </h3>
          <p>
            Bio: <br />
            <b>{data.user.bio}</b>
          </p>
          <p>
            logged in with email : <br />
            <b>{data.user.email}</b>
          </p>
          <p>
            User ID: <br />
            <b>{data.user.id}</b>
          </p>
        </div>
      );
    }
  }
  render() {
    return (
      <App>
        <div>{this.renderUserData()}</div>
      </App>
    );
  }
}

export default graphql(query)(Dashboard);
