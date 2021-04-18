import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotMatch from './components/NotMatch/NotMatch';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Book from './components/Book/Book';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={ [loggedInUser, setLoggedInUser] }>
      <p>Name: {loggedInUser.name}</p>
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/book/:bedType'>
            <Book></Book>
          </PrivateRoute>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotMatch></NotMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
