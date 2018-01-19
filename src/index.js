import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import history from './history';
import App from './components/App';

function refreshWholeApp() {
  ReactDOM.render(
    <Router history={history} basename="/">
      <App refreshWholeApp={refreshWholeApp}/>
    </Router>,
    document.getElementById('app')
  );
}

refreshWholeApp();

export default history;
