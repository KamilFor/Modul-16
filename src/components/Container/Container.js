import React, { Component } from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types';

export default class Container extends Component {
  static propTypes = {
    children: PropTypes.node,
  };
  render() {
    const { children } = this.props;
    return <div className={styles.component}>{children}</div>;
  }
}
