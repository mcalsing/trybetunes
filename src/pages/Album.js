import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';

class Album extends React.Component {
  state = {
    artistName: '',
    collectionName: '',
    musics: [],
  }

  componentDidMount = async () => {
    const { match: { params: { id } } } = this.props;
    const [album, ...musics] = await getMusics(id);
    console.log(album);
    console.log(musics);
    const { artistName, collectionName } = album;

    this.setState({ musics, artistName, collectionName });
  }

  render() {
    /* const { id } = this.props.match.params; */
    const { musics, artistName, collectionName } = this.state;
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
