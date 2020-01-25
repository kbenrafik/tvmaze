import Http from '../../Http';
import { GET } from '../../constants';
import { routes } from '../../routes';
import EpisodeModel from './EpisodeModel';

/**
 * Season endPoint
 * @class
 *
 * @property {SeasonModel[]} listByShow : Fetches a list of episodes by show ID on the tvmaze.
 * @property {SeasonModel[]} listBySeason : Fetches a list of episodes by season ID on the tvmaze.
 * @property {SeasonModel[]} fetch : Fetches a single episode by ID on the tvmaze.
 */
class Episode extends Http {
  /**
   * Fetches a list of episodes by show ID on the tvmaze.
   *
   * @example
   * const episodes = await client.episode.listByShow(idShow);
   * // Do something with the episodes
   *
   * @param {String} idShow to fetch
   * @returns {EpisodeModel[]}
   */
  async listByShow(idShow) {
    const episodes = await this.response(GET, routes.episodesByShowPath(idShow));
    return episodes
      .map(episode => new EpisodeModel(episode));
  }

  /**
   * Fetches a list of episodes by season ID on the tvmaze.
   *
   * @example
   * const episodes = await client.episode.listBySeason(idSeason);
   * // Do something with the episodes
   *
   * @param {String} idSeason to fetch
   * @returns {EpisodeModel[]}
   */
  async listBySeason(idSeason) {
    const episodes = await this.response(GET, routes.EpisodesBySeasonPath(idSeason));
    return episodes
      .map(episode => new EpisodeModel(episode));
  }

  /**
   * Fetches a single episode by ID on the tvmaze.
   *
   * @example
   * const episode = await client.episode.fetch(idEpisode);
   * // Do something with the episode
   *
   * @param {String} is of the episode to fetch.
   * @returns {EpisodeModel}
   */
  async fetch(idEpisode) {
    const episode = await this.response(GET, routes.episodePath(idEpisode));
    return new EpisodeModel(episode);
  }
}

export default Episode;