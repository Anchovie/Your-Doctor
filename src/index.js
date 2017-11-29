import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';


const Root = () => (
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  );

ReactDOM.render(<Root />, document.getElementById('root'));
