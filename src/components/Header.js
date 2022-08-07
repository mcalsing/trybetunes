import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  state = {
    userName: '',
    loading: true,
  }

  componentDidMount = async () => {
    this.setState({
      loading: true,
      userName: await getUser(),
    }, () => {
      this.setState({ loading: false });
    });
  }

  render() {
    const { userName, loading } = this.state;
    return (
      <header className="header-bar" data-testid="header-component">
        <Link to="/">TrybeTunes</Link>
        <p data-testid="header-user-name">
          {loading ? <Loading /> : `Bem vindo, ${userName.name}!` }
        </p>
        <nav className="nav-bar">
          <Link to="/search" data-testid="link-to-search">Search</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favoritos</Link>
          <Link to="/profile" data-testid="link-to-profile">Profile</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
