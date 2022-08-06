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
      <header data-testid="header-component">
        <Link to="/search" data-testid="link-to-search">Ir para Search</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Ir para Favoritos</Link>
        <Link to="/profile" data-testid="link-to-profile">Ir para Profile</Link>
        <p data-testid="header-user-name">
          {loading ? <Loading /> : `Bem vindo, ${userName.name}!` }
        </p>
      </header>
    );
  }
}

export default Header;
