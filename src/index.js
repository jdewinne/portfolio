import React from 'react';
import { createRoot } from 'react-dom/client';
import Portfolio from './Portfolio';
import * as serviceWorker from './serviceWorker';

import ReactGA from 'react-ga';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Portfolio />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
