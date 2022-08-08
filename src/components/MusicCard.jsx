import React from 'react';
import PropTypes from 'prop-types';

class AlbumCard extends React.Component {
  render() {
    const { trackCard: { trackName, previewUrl } } = this.props;

    return (
      <section className="track-card">
        <div className="music-name">
          <span>{trackName}</span>
        </div>
        <div className="audio">
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            <code>audio</code>
          </audio>
        </div>
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
