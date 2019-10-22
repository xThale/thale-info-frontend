import React from 'react';
import {createStore} from "redux";
import {rootReducer} from "./store/reducer/root";
import {AppState, initState} from "./store/types/appState";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux';
import {loadState, saveState} from "./misc/localStorage";
import {throttle} from 'lodash';
import {NavBar} from "./components/NavBar";
import {DeckListPage} from "./components/DeckListPage";

const state : AppState = loadState() || initState()

const store = createStore(
    rootReducer,
    state
);

store.subscribe(throttle(() =>
    saveState(store.getState()),
    1000
))

const App: React.FC = () => {
  return (
      <Router>
            <Provider store={store}>
                <NavBar />
                <DeckListPage />
            </Provider>
      </Router>
  );
}

export default App;
