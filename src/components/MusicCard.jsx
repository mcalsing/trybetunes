import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class AlbumCard extends React.Component {
  state = {
    isFavorite: false,
    loading: false,
  }

  handleCheckbox = async (event) => {
    const { name, checked } = event.target;
    console.log(checked);

    this.setState({ [name]: checked, loading: true }, async () => {
      const { albumCard } = this.props;
      if (checked) await addSong(albumCard);
      else await removeSong(albumCard);
      this.setState({ loading: false });
    });
  }

  render() {
    const { albumCard: { trackName, previewUrl, trackId } } = this.props;
    const { isFavorite, loading } = this.state;

    return (
      <section className="track-card">
        { loading ? <Loading /> : (
          <label htmlFor="favorita">
            <span>{trackName}</span>
            Favorita
            <input
              type="checkbox"
              name="isFavorite"
              checked={ isFavorite }
              onChange={ this.handleCheckbox }
              data-testid={ `checkbox-music-${trackId}` }
            />
          </label>
        )}
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>

      </section>
    );
  }
}

AlbumCard.propTypes = {
  collectionName: PropTypes.string,
  artworkUrl100: PropTypes.string,
  artistName: PropTypes.string,
  collectionId: PropTypes.number,
}.isRequired;

export default AlbumCard;
