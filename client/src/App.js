import React from 'react';
import Header from './Header';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Library, LibraryList } from './Library';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={LibraryList} />
          <Route path="/library/:id" component={Library} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
