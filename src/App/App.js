import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import Home from '../Home/Home';
import Auth from '../Auth/Auth';
import MyNavbar from '../MyNavbar/MyNavbar';
import firebaseConnection from '../Helpers/data/connection';

import './App.scss';

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({authed: true});
      } else {
        this.setState({authed: false})
      }
    })
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const {authed} = this.state;
    const loadComponent = () => {
      if (authed) {
        return <Home />
      } else {
        return <Auth />
      }
    }
    return (
      <div class="App">
        <MyNavbar authed={authed}/>
        {loadComponent()}
      </div>
    )
  }
}

export default App;
