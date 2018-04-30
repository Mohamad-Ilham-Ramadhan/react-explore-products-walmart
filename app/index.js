import React from 'react';
import ReactDOM from 'react-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import regulars from '@fortawesome/fontawesome-free-regular';
import solids from '@fortawesome/fontawesome-free-solid';
import App from './Components/App';

import 'popper.js';
import 'bootstrap';

import './main.scss';

fontawesome.library.add(regulars);

ReactDOM.render(
	<App />,
	document.getElementById('app')
);

module.hot.accept();