import _ from 'lodash';
import { GET_SHOW_ACTION} from './actionsTypes';

/**
 * Is in cache
 * @param {*} showsCache
 * @param {string} idShow
 * @returns {boolean}
 */
const isInCache = (showsCache, idShow) => {
  return !!_.get(showsCache, idShow);
};

/**
 * Get show
 * @param {string} id
 * @returns {function(...[*]=)}
 */
export const getShow = (id) => async (dispatch, getState, client) => {
  const isCached = isInCache(getState().shows, id);
  let payload = {};
  if (isCached) {
    payload = {
      isCached: true
    };
  } else {
    const show = await client.show.fetch(id);
    payload = {
      show,
      isCached: false
    };
  }

  dispatch({
    type: GET_SHOW_ACTION,
    payload
  });
};
