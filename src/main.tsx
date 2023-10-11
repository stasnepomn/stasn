import { render } from 'preact';
import { App } from './app';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './index.scss';

render(
  <>
    <ToastContainer />
    <App />
  </>,
  document.getElementById('__stasn')!
);
