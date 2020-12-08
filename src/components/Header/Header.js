import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';

class Header extends Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className='wrapper'>
            <Link className='logo' to='/'>
              <Icon name='accessible-icon' />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>
                Home
              </NavLink>
              <NavLink exact to='/info' activeClassName='active'>
                Info
              </NavLink>
              <NavLink exact to='/faq' activeClassName='active'>
                FAQ
              </NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
