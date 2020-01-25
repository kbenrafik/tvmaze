import Http from '../../Http';
import { GET } from '../../constants';
import { routes } from '../../routes';
import SeasonModel from './SeasonModel';

/**
 * Season endPoint
 * @class
 *
 * @property {SeasonModel[]} list : Fetches a list of seasons by show ID on the tvmaze.
 */
class Season extends Http {
  /**
   * Fetches a list of episodes by show ID on the tvmaze.
   *
   * @example
   * const seasons = await client.season.list(idShow);
   * // Do something with the seasons
   *
   * @param {String} idShow to fetch
   * @returns {SeasonModel[]}
   */
  async list(idShow) {
    const seasons = await this.response(GET, routes.seasonsPath(idShow));
    return seasons
      .map(season => new SeasonModel(season));
  }
}

export default Season;