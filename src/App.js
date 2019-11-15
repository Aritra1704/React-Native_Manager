import React, {Component} from 'React';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import LoginForm from '../src/components/Loginform';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'API_KEY',
      authDomain: 'reactmanager-66f3c.firebaseapp.com',
      databaseURL: 'https://reactmanager-66f3c.firebaseio.com',
      projectId: 'reactmanager-66f3c',
      storageBucket: 'reactmanager-66f3c.appspot.com',
      messagingSenderId: '781373362344',
      appID: 'project-781373362344',
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
