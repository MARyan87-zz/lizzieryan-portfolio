import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/App';

function refreshWholeApp() {
  ReactDOM.render(
    <Router basename="/">
      <App refreshWholeApp={refreshWholeApp}/>
    </Router>,
    document.getElementById('app')
  );
}

refreshWholeApp();
