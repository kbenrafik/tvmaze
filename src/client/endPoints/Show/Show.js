import Http from '../../Http';
import { GET } from '../../constants';
import { routes } from '../../routes';
import ShowModel from './ShowModel';

/**
 * Show endPoint
 * @class
 *
 * @property {ShowModel} fetch : Fetches a single show by ID on the tvmaze.
 */
class Show extends Http {
  /**
   * Fetches a single show by ID on the tvmaze.
   *
   * @example
   * const show = await client.show.fetch(id);
   * // Do something with the show
   *
   * @param {String} id of the show to fetch
   * @returns {ShowModel}
   */
  async fetch(id) {
    const showData = await this.response(GET, routes.showPath(id));
    return new ShowModel(showData);
  }
}

export default Show;