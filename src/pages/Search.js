import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  render() {
    return (
      <div>
        <Header />
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
export default Search;
