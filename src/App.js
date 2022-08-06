import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import Loading from './components/Loading';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>TrybeTuness</h1>
        <Header />

        <Switch>
          <div exact data-testid="page-login">
            <Route path="/" component={ Login } />
          </div>

          <div exact data-testid="page-search">
            <Route path="/search" component={ Search } />
          </div>

          <div exact data-testid="page-album">
            <Route path="/album/:id" component={ Album } />
          </div>

          <div exact data-testid="page-favorites">
            <Route path="/favorites" component={ Favorites } />
          </div>

          <div exact data-testid="page-profile">
            <Route path="/profile" component={ Profile } />
          </div>

          <div exact data-testid="page-profile-edit">
            <Route path="/profile/edit" component={ ProfileEdit } />
          </div>

          <div exact data-testid="page-profile-edit">
            <Route path="/loading" component={ Loading } />
          </div>

          <div data-testid="page-not-found">
            <Route component={ NotFound } />
          </div>
        </Switch>

      </div>
    );
  }
}

export default App;
