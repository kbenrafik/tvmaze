import _ from 'lodash';
import { GET_SEASONS_ACTION } from './actionsTypes';

/**
 * Is in cache
 * @param {*} seasonsCache
 * @param {}String idShow
 * @returns {boolean}
 */
const isInCache = (seasonsCache, idShow) => {
  return !!_.get(seasonsCache, idShow);
};

/**
 * Get seasons
 * @param {String} idShow
 * @returns {function(...[*]=)}
 */
export const getSeasons = (idShow) => async (dispatch, getState, client) => {
  const isCached = isInCache(getState().seasons, idShow);
  let payload = {};
  if (isCached) {
    payload = {
      isCached: true
    };
  } else {
    const seasons = await client.season.list(idShow);
    payload = {
      seasons,
      isCached: false,
      idShow
    };
  }

  dispatch({
    type: GET_SEASONS_ACTION,
    payload
  });
};
