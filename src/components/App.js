import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Header from './Header/Header';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshWholeApp: props.refreshWholeApp
    }

    this.refreshWholeApp = this.refreshWholeApp.bind(this);
  }

  refreshWholeApp() {
    this.state.refreshWholeApp();
  }

  render() {
    return (
      <div className="backdrop">
        <div className="container">
          <Route
            path="/"
            component={(props) => (
              <Header {...props}
                      refreshWholeApp={this.refreshWholeApp}
              />)}
          />
        </div>
      </div>
    );
  }
}

export default App;



