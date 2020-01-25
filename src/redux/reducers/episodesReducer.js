import { GET_EPISODES_BY_SEASON_ACTION } from '../actions/actionsTypes';

const initialState = {  };

export default (
  state = initialState,
  {
    type,
    payload
  }
) => {

  switch (type) {
    case GET_EPISODES_BY_SEASON_ACTION:
      const {
        episodes,
        idShow,
        idSeason,
        isCached
      } = payload;

      if (isCached) {
        return state;
      } else {
        return {
          ...state,
          [idShow]: {
            ...state[idShow],
            [idSeason]: episodes
          }
        };
      }
    default:
      return state;
  }
}