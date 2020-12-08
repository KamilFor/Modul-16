import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import FAQ from '../FAQ/FAQ';
import MainLayout from '../MainLayout/MainLayour';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => (
  <div>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/info' component={Info} />
          <Route exact path='/faq' component={FAQ} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </div>
);

export default App;
