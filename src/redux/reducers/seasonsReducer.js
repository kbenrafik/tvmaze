import { GET_SEASONS_ACTION } from '../actions/actionsTypes';

const initialState = {};

export default (
  state = initialState,
  {
    type,
    payload
  }
) => {

  switch (type) {
    case GET_SEASONS_ACTION:
      const {
        seasons,
        idShow,
        isCached
      } = payload;

      if (isCached) {
        return state;
      } else {
        return {
          ...state,
          [idShow]: seasons
        };
      }
    default:
      return state;
  }
}