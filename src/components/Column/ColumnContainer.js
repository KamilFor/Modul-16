import { connect } from 'react-redux';
import Column from './Column';
import { getCardsForColumn, createActionAddCards } from '../../redux/cardsRedux';

// export const getCardsForColumn = ({ cards }, columnId) => cards.filter((card) => card.columnId == columnId);

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: (title) =>
    dispatch(
      createActionAddCards({
        columnsId: props.id,
        title,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
