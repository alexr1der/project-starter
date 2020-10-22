import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import Mypage from './pages/MyPage';
import MyPage from './pages/MyFriends';
import PlaceWizard from './pages/PlaceWizard';

import './App.css';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary shadow mb-3">
      <Link className="navbar-brand" to="/">TripGram</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/posts/new">
            Create a Post
          </NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link" exact to="/MyPage">
            My Page
          </NavLink>
        </li>

      
         <li className="nav-item">
          <NavLink className="nav-link" exact to="/MyFriends">
            My Friends
          </NavLink>
        </li>

      
         <li className="nav-item">
          <NavLink className="nav-link" exact to="/PlaceWizard">
            Place Wizard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}


class App extends React.Component {
  render() {
    return (
        <Router>
          <Navigation />
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/posts/new" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                 <Route path="/MyPage" component={AboutUsPage} />
                 <Route path="/MyFriends" component={AboutUsPage} />
                 <Route path="/PlaceWizard" component={AboutUsPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/" component={PostsListPage} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;
