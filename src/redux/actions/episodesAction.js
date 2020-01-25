import _ from 'lodash';
import { GET_EPISODES_BY_SEASON_ACTION } from './actionsTypes';

/**
 * Is in cache
 * @param {*} episodesCache
 * @param {string} path
 * @returns {boolean}
 */
const isInCache = (episodesCache, path) => {
  return !!_.get(episodesCache, path);
};

/**
 * Get episode by season id action
 * @param {string} idShow
 * @param {string} idSeason
 * @returns {function(...[*]=)}
 */
export const getEpisodesBySeason = (idShow, idSeason) => async (dispatch, getState, client) => {
  const isCached = isInCache(getState().episodes, `${idShow}.${idSeason}`);
  let payload = {};
  if (isCached) {
    payload = {
      isCached: true
    };
  } else {
    const episodes = await client.episode.listBySeason(idSeason);
    payload = {
      episodes,
      isCached: false,
      idShow,
      idSeason
    };
  }

  dispatch({
    type: GET_EPISODES_BY_SEASON_ACTION,
    payload
  });
};

