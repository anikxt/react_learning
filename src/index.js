import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/* ReactDOM.render does is it essentially says,
"Render whatever component you pass it (in our case, this is our App component)
inside the document.getElementById('root')" */
