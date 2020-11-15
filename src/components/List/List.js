import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
//import Column from '../Column/Column.js';
import ColumnContainer from '../Column/ColumnContainer';
//import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'html-react-parser';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    src: PropTypes.node,
    lists: PropTypes.array,
    image: PropTypes.node,
  };

  static defaultProps = {
    description: settings.defaultListDescription,
  };

  //state = {
  //columns: this.props.columns || [],
  //};

  //Metoda Add column
  //addColumn(title) {
  //this.setState((state) => ({
  // columns: [
  // ...state.columns,
  //{
  //key: state.columns.length ? state.columns[state.columns.length - 1].key + 1 : 0,
  //title,
  //icon: 'list-alt',
  //cards: [],
  //},
  //],
  //}));
  //}

  render() {
    const { title, image, description, columns } = this.props;
    return (
      <section className={styles.component}>
        <h2>Things to do</h2>
        <Hero titleText={title} image={image} />
        <div className={styles.description}>{ReactHtmlParser(description)}</div>

        <div className={styles.columns}>
          {columns.map((columnData) => <ColumnContainer key={columnData.id} {...columnData} />)}
        </div>
        {/*
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={(title) => this.addColumn(title)} />
        </div>
        */}
      </section>
    );
  }
}

export default List;
