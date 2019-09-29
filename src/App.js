import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store"
import { PersistGate } from 'redux-persist/integration/react'
import LandingPage from './Routes/landingpage';
import Auth from "./Routes/Auth"

import { FileNotFound } from './Utilities/filenotfound.js'
import { createBrowserHistory } from "history"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router history={createBrowserHistory()} >
            <Switch>
              <Route exact path='/' component={LandingPage}></Route>
              <Route path='/auth' component={Auth}></Route>
              <Route path="*" component={FileNotFound}/>
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
