import _ from 'lodash';
import { GET_EPISODE_ACTION } from './actionsTypes';

const isInCache = (episodeCache, idEpisode) => {
  return !!_.get(episodeCache, idEpisode);
};

/**
 * Get episode action
 * @param {String} idEpisode
 * @returns {function(...[*]=)}
 */
export const getEpisode = (idEpisode) => async (dispatch, getState, client) => {
  const isCached = isInCache(getState().episode, idEpisode);
  let payload = {};
  if (isCached) {
    payload = {
      isCached: true
    };
  } else {
    const episode = await client.episode.fetch(idEpisode);
    payload = {
      episode,
      isCached: false
    };
  }

  dispatch({
    type: GET_EPISODE_ACTION,
    payload
  });
};
