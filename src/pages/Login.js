import React from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  state = {
    loginInput: '',
    isEntryButtonDisabled: true,
  }

  inputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => {
      const { loginInput } = this.state;
      const loginLength = 3;
      const buttonDisabled = loginInput.length >= loginLength;

      this.setState({ isEntryButtonDisabled: !buttonDisabled });
    });
  }

  entryButtonClick = async () => {
    const { loginInput } = this.state;
    const { history } = this.props;
    history.push('/loading');

    await createUser({ name: loginInput });

    history.push('/search');
  }

  render() {
    const { isEntryButtonDisabled, loginInput } = this.state;

    return (
      <div data-testid="page-login">
        <label htmlFor="login">
          Login:
          <input
            type="text"
            name="loginInput"
            value={ loginInput }
            onChange={ this.inputChange }
            data-testid="login-name-input"
          />
          <button
            type="submit"
            name="isEntryButtonDisabled"
            disabled={ isEntryButtonDisabled }
            onClick={ this.entryButtonClick }
            data-testid="login-submit-button"
          >
            Entrar
          </button>
        </label>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Login;
