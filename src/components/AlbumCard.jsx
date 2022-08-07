import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AlbumCard extends React.Component {
  render() {
    const { card } = this.props;
    const { artworkUrl100, artistName, collectionName, collectionId } = card;

    return (
      <section className="album-card">
        <img className="album-img" src={ artworkUrl100 } alt={ collectionName } />
        <Link
          data-testid={ `link-to-album-${collectionId}` }
          to={ `/album/${collectionId}` }
        >
          {collectionName}
        </Link>
        <span>{artistName}</span>
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
