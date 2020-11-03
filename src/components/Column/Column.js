import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';

class Column extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    icon: PropTypes.node,
    title: PropTypes.node,
  };
  state = {
    card: this.props.cards || [],
    icon: this.props.icon || [],
  };

  //Metoda Add sssss
  addCard(title) {
    this.setState((state) => ({
      card: [
        ...state.card,
        {
          key: state.card.length ? state.card[state.card.length - 1].key + 1 : 0,
          title,
        },
      ],
    }));
  }

  render() {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>
          <span className='icon'>
            <Icon name={this.state.icon} />
          </span>
          {this.props.title}
        </h3>
        {this.state.card.map(({ key, ...cardProps }) => <Card key={key} {...cardProps} />)}
        <Creator text={settings.cardCreatorText} action={(title) => this.addCard(title)} />
      </div>
    );
  }
}

export default Column;
