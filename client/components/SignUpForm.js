import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

import AuthForm from './AuthForm';
import App from './App';

import query from '../queries/CurrentUser';
import mutation from '../mutations/Signup';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

  componentWillUpdate(NextProps) {
    if (!this.props.data.user && NextProps.data.user) {
      hashHistory.push('/dashboard');
    }
  }

  onSubmit({ email, password, name, displayPicture, bio }) {
    this.props
      .mutate({
        variables: { email, password, name, displayPicture, bio },
        refetchQueries: [{ query }]
      })
      .catch(res => {
        const errors = res.graphQLErrors.map(error => error.message);
        this.setState({ errors });
      });
  }
  render() {
    return (
      <App>
        <h3>Sign Up.</h3>
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </App>
    );
  }
}

export default graphql(query)(graphql(mutation)(SignUpForm));
