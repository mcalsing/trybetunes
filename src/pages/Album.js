import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Album extends React.Component {
  state = {
    artistName: '',
    collectionName: '',
    musics: [],
    favoriteMusics: [],
  }

  componentDidMount = async () => {
    const { match: { params: { id } } } = this.props;
    const [album, ...musics] = await getMusics(id);
    const { artistName, collectionName } = album;
    const favoriteMusics = await getFavoriteSongs();
    this.setState({ musics, artistName, collectionName, favoriteMusics });
  }

  render() {
    /* const { id } = this.props.match.params; */
    const { musics, artistName, collectionName, favoriteMusics } = this.state;
    const showMusics = musics.map((music) => {
      const isFavorite = favoriteMusics.some(({ trackId }) => trackId === music.trackId);
      return (<MusicCard
        key={ music.trackId }
        albumCard={ music }
        trueFavorite={ isFavorite }
      />);
    });

    return (
      <section data-testid="page-album">
        <Header />
        {/* <p>{`Album: ${id}`}</p> */}
        <div>
          <p data-testid="artist-name">
            {artistName}
          </p>
          <p data-testid="album-name">
            {collectionName}
          </p>
          <div className="track-list">
            <p>{showMusics}</p>
          </div>
        </div>

      </section>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Album;
