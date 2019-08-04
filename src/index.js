import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './components/App';

const AppWraped = () => (
  <>
    <CssBaseline />
    <App />
  </>
);

ReactDOM.render(<AppWraped />, document.querySelector('#root'));
