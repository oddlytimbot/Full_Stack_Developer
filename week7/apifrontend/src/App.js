import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {authReducer} from './reducers/reducers';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import {AppContainer} from './components/containers/appContainer'


const allReducers = combineReducers({
  authReducer
})

///the store is the source of all state in the application
///it is also called the 'one source of truth'
const store = createStore(allReducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
