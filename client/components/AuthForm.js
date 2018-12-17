import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      displayPicture: '',
      bio: ''
    };
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  renderSpecificForm() {
    if (this.props.isLoginPage) {
      return (
        <div className="row">
          <form className="col s8" onSubmit={this.onSubmit.bind(this)}>
            <div className="input-field">
              <input
                placeholder="Email"
                type="email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                required
              />
            </div>
            <div className="input-field">
              <input
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                required
              />
            </div>

            <div className="errors">
              {this.props.errors.map(error => (
                <div key={error}>{error}</div>
              ))}
            </div>

            <button className="btn"> submit</button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="row">
          <form className="col s8" onSubmit={this.onSubmit.bind(this)}>
            <div className="input-field">
              <input
                placeholder="Name"
                type="text"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
                required
              />
            </div>
            <div className="input-field">
              <input
                placeholder="Display Picture URL"
                type="text"
                value={this.state.displayPicture}
                onChange={e =>
                  this.setState({ displayPicture: e.target.value })
                }
                required
              />
            </div>

            <div className="input-field">
              <input
                placeholder="Bio"
                type="text"
                value={this.state.bio}
                onChange={e => this.setState({ bio: e.target.value })}
                required
              />
            </div>
            <br />
            <br />

            <div className="input-field">
              <input
                placeholder="Email"
                type="email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                required
              />
            </div>
            <div className="input-field">
              <input
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                required
              />
            </div>

            <div className="errors">
              {this.props.errors.map(error => (
                <div key={error}>{error}</div>
              ))}
            </div>

            <button className="btn"> submit</button>
          </form>
        </div>
      );
    }
  }

  render() {
    return this.renderSpecificForm();
  }
}

export default AuthForm;
