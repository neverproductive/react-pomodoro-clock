import React from 'react';
import ReactDOM from 'react-dom';
import './_variables.sass';
import './index.sass';
import Timer from './Timer';
import { StateProvider } from "./contexts/stateProvider";
import reducer, { initialState } from "./reducer";
import ThemeProvider from './contexts/themeProvider';
import Links from './components/Links/Links';
import Background from './components/Background/Background';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <ThemeProvider>
        <Background />
        <Timer />
        <Links />
      </ThemeProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);