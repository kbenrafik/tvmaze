import { GET_SHOW_ACTION } from '../actions/actionsTypes';

const initialState = {};

export default (
  state = initialState,
  {
    type,
    payload
  }
) => {

  switch (type) {
    case GET_SHOW_ACTION:
      const {
        show,
        isCached
      } = payload;

      if (isCached) {
        return state;
      } else {
        const id = show.getId();
        return {
          ...state,
          [id]: show
        };
      }
    default:
      return state;
  }
}