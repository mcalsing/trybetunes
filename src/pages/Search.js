import React from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';
import AlbumComponent from '../components/AlbumCard';

class Search extends React.Component {
  state = {
    searchInput: '',
    isSearchButtonDisabled: true,
    searchedAlbum: [],
    loading: true,
    showArtistOnTop: '',
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

  searchButtonClick = async () => {
    const { searchInput } = this.state;
    this.setState({
      loading: true,
      searchedAlbum: await searchAlbumsAPI(searchInput),
      showArtistOnTop: searchInput,

    }, () => {
      this.setState({
        loading: false,
        searchInput: '',
      });
    });
  }

  render() {
    const { isSearchButtonDisabled,
      searchInput, searchedAlbum, showArtistOnTop } = this.state;

    const showAlbum = searchedAlbum.map((album) => (
      <AlbumComponent key={ album.collectionId } card={ album } />
    ));

    /* const showAlbum = searchedAlbum.map((album, index) => (
      <div key={ index }>
        {album.artistName}
        {' - '}
        {album.collectionName}
      </div>)); */

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
            onClick={ this.searchButtonClick }
            data-testid="search-artist-button"
          >
            Pesquisar
          </button>
        </label>
        <div>
          <p>
            Resultado de álbuns de:
            {' '}
            { showArtistOnTop }
          </p>
        </div>
        <div className="album-list">
          {/* {loading ? <Loading /> : showAlbum} */}
          { searchedAlbum.length === 0 ? 'Nenhum álbum foi encontrado' : showAlbum}
        </div>
      </div>
    );
  }
}
export default Search;
