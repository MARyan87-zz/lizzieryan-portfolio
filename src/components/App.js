import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Work from './Work/Work';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshWholeApp: props.refreshWholeApp
    };

    this.refreshWholeApp = this.refreshWholeApp.bind(this);
  }

  refreshWholeApp() {
    this.state.refreshWholeApp();
  }

  render() {
    return (
      <div className="backdrop">
        <div className="container">
          <Header />
          <div className="content">
            <Switch>
              <Route
                path="/"
                exact
                component={Work}
              />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;



