import { GET_EPISODE_ACTION } from '../actions/actionsTypes';

const initialState = {};

export default (
  state = initialState,
  {
    type,
    payload
  }
) => {

  switch (type) {
    case GET_EPISODE_ACTION:
      const {
        episode,
        isCached
      } = payload;

      if (isCached) {
        return state;
      } else {
        const id = episode.getId();
        return {
          ...state,
          [id]: episode
        };
      }
    default:
      return state;
  }
}