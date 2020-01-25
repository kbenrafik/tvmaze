import {
  Show,
  Episode,
  Season
} from './endPoints';

/**
 * The JS TVMAZE SDK Client.
 * @class
 *
 * @property {Show} 'show' The property under which shows fetching methods live.
 * @property {Episode} 'episode' The property under which episodes fetching methods live.
 * @property {Season} 'season' The property under which seasons fetching methods live.
 */
class Client {

  /**
   * @constructs Client
   * @param {Object} config : used to configure the Client.
   * @param {String} host : host of api
   */
  constructor({
    host
  }) {
    this.host = host || Client.defaultHost;

    this.addEndPoints();
  }

  /**
   * Add all endPoints to the client.
   */
  addEndPoints() {
    this.show = new Show(this.host);
    this.episode = new Episode(this.host);
    this.episode = new Episode(this.host);
    this.season = new Season(this.host);
  }

  /**
   * Default host.
   */
  static defaultHost = 'http://api.tvmaze.com/';
}

export default Client;