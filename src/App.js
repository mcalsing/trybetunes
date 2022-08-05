import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import Loading from './components/Loading';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>TrybeTuness</h1>
        {/* <Loading /> */}

        {/* <Switch></Switch> */}
        <div data-testid="page-login">
          <Route path="/" component={ Login } />
        </div>

        <div data-testid="page-search">
          <Route path="/search" component={ Search } />
        </div>

        <div data-testid="page-album">
          <Route path="/album/:id" component={ Album } />
        </div>

        <div data-testid="page-favorites">
          <Route path="/favorites" component={ Favorites } />
        </div>

        <div data-testid="page-profile">
          <Route path="/profile" component={ Profile } />
        </div>

        <div data-testid="page-profile-edit">
          <Route path="/profile/edit" component={ ProfileEdit } />
        </div>

        <div data-testid="page-profile-edit">
          <Route path="/loading" component={ Loading } />
        </div>

        <div data-testid="page-not-found">
          <Route component={ NotFound } />
        </div>

      </div>
    );
  }
}

export default App;
