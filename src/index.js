import * as React from 'react';
import ReactDOM from 'react-dom';
import LinkExternal from './LinkExternal';

ReactDOM.render(
  <React.StrictMode>
    <LinkExternal href="https://google.com">External Link</LinkExternal>
  </React.StrictMode>,
  document.getElementById('root')
);
