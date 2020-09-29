import React from 'react';
import { render } from 'react-dom';
import 'normalize.css'; // gets rid of the default border;
import App from './app';
import { GlobalStyles } from './global-styles';

render(<>
<GlobalStyles/>
<App />
</>,
 document.getElementById('root'));