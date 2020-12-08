import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import FAQ from '../FAQ/FAQ';
import MainLayout from '../MainLayout/MainLayour';
import List from '../List/ListContainer';
import SearchResults from '../SearchResults/SearchResults';

// Styles
import styles from './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

const App = () => (
  <div>
    <BrowserRouter>
      <MainLayout>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className={styles.switchWrapper}
        >
          <Route exact path='/' component={Home} />
          <Route exact path='/info' component={Info} />
          <Route exact path='/faq' component={FAQ} />
          <Route exact path='/list/:id' component={List} />
          <Route exact path='/search/:id' component={SearchResults} />
        </AnimatedSwitch>
      </MainLayout>
    </BrowserRouter>
  </div>
);

export default App;
