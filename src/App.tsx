import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import configureStore from './store';
import './App.css';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
