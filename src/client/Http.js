import Axios from 'axios';

/**
 * The class used to interact with http.
 * @class
 */
class Http {
  /**
   * @constructor Http
   * @param {String} host
   */
  constructor(host) {
    this.host = host;
    this.axios = Axios.create({
      baseURL: this.host,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  /**
   * Response
   * @param {String} method
   * @param {String} route
   * @param {*} params
   * @returns {Promise<*>}
   */
  async response(method, route, params = {}) {
    try {
      let res;
      const reqFunc = this.axios[method];
      res = await reqFunc(route, {params});
      return res.data;
    } catch (error) {
      //TODO add error class !
      console.error(error);
    }
  }
}

export default Http;