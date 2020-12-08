import React from 'react';
import styles from './Home.scss';
import PropTypes from 'prop-types';
//import List from '../List/List.js';
import ListContainer from '../List/ListContainer.js';
import Search from '../Search/SearchContainer';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  };

  render() {
    const { title, subtitle, lists } = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        {lists.map((listData) => <ListContainer key={listData.id} {...listData} />)}
        {/* <List title={'Things to do '} src={'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'} {...listData}>
          <p>Im planning on doing all these things sooner, rather than later!</p>
    </List> */}
      </main>
    );
  }
}

export default Home;
