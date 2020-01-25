import _ from 'lodash';

/**
 * Abstraction of model
 * @class
 */
class Model {
  /**
   * @constructor
   * @param {Object} data
   */
  constructor(data = {}) {
    this.data = data;
  }

  /**
   * Get property from the model
   * @param {String} property
   * @returns {*}
   */
  get(property) {
    return _.get(this.data, property);
  }

  /**
   * Get id
   * @returns {*}
   */
  getId() {
    return this.get('id');
  }

  /**
   * Get name.
   * @returns {*}
   */
  getName() {
    return this.get('name');
  }

  /**
   * Get summary.
   * @returns {*}
   */
  getSummary() {
    return this.get('summary');
  }

  /**
   * Get image.
   * @param {String} size of the image, by default is the original.
   * @returns {*}
   */
  getImage(size = 'original') {
    return this.get('image.original');
  }
}

export default Model;