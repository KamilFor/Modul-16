import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';

class Column extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    title: PropTypes.node,
    addCard: PropTypes.func,
    icon: PropTypes.string,
  };

  state = {
    card: this.props.cards || [],
    icon: this.props.icon || [],
  };

  //   static defaultProps = {
  //     icon: settings.defaultColumnIcon,
  //   };

  //Metoda Add sssss
  /*  addCard(title) {
    this.setState((state) => ({
      card: [
        ...state.card,
        {
          key: state.card.length ? state.card[state.card.length - 1].key + 1 : 0,
          title,
        },
      ],
    }));
  }*/

  render() {
    const { title, icon, cards, addCard } = this.props;
    console.log(icon);
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>
          <span className='icon'>
            <Icon name={icon} />
          </span>
          {title}
        </h3>
        {cards.map((cardData) => <Card key={cardData.id} {...cardData} />)}
        {this.state.card.map(({ key, ...cardProps }) => <Card key={key} {...cardProps} />)}
        <Creator text={settings.cardCreatorText} action={addCard} />
      </div>
    );
  }
}

export default Column;
