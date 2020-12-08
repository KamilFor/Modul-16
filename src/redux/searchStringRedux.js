import shortid from 'shortid';

// selectors
export const getSearchString = (searchString) => searchString.state;
export const countVisibleCards = ({ cards, searchString }) =>
  cards.filter((card) => new RegExp(searchString, 'i').test(card.title)).length;
export const countAllCards = ({ cards }) => cards.length;

// action name creator
const reducerName = 'search';
export const createAction_changeSearchString = (name) => `app/${reducerName}/${name}`;

// actions types
export const ADD_SEARCH = createAction_changeSearchString('ADD_SEARCH');

// action creators
export const createActionAddCards = (payload) => ({
  payload: { ...payload, id: shortid.generate() },
  type: ADD_SEARCH,
});

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case ADD_SEARCH:
      return [statePart, ...action.payload];
    default:
      return statePart;
  }
}
