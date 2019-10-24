import React from 'react';
import {createStore} from "redux";
import {rootReducer} from "./store/reducer/root";
import {AppState, initState} from "./store/types/appState";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux';
import {loadState, saveState} from "./misc/localStorage";
import {throttle} from 'lodash';
import {ThemeProvider} from "styled-components";
import config from "./config/Config";
import {BreakpointProvider} from 'react-socks';
import {PageLayout} from "./components/layout/PageLayout";

// Load initial or saved state
const state : AppState = loadState() || initState();

const store = createStore(
    rootReducer,
    state
);

// Save state
store.subscribe(throttle(() =>
    saveState(store.getState()),
    1000
));

const theme = config.theme;

// The main application component
const App: React.FC = () => {
  return (
      <ThemeProvider theme={theme}>
          <Router>
              <Provider store={store}>
                  <BreakpointProvider>
                      <PageLayout />
                  </BreakpointProvider>
              </Provider>
          </Router>
      </ThemeProvider>
  );
};

export default App;
