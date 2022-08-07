import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  state = {
    searchInput: '',
    isSearchButtonDisabled: true,
  }

  inputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => {
      const { searchInput } = this.state;
      const loginLength = 2;
      const buttonDisabled = searchInput.length >= loginLength;

      this.setState({ isSearchButtonDisabled: !buttonDisabled });
    });
  }

  render() {
    const { isSearchButtonDisabled, searchInput } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        <label htmlFor="login">
          Artista:
          <input
            type="text"
            name="searchInput"
            value={ searchInput }
            onChange={ this.inputChange }
            data-testid="search-artist-input"
          />
          <button
            type="submit"
            name="isSearchButtonDisabled"
            disabled={ isSearchButtonDisabled }
            // onClick={ this.entryButtonClick }
            data-testid="search-artist-button"
          >
            Procurar
          </button>
        </label>
      </div>
    );
  }
}
export default Search;
