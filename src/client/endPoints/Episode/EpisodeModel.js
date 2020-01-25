import Model from '../../Model';

/**
 * Episode model
 * @class
 */
class EpisodeModel extends Model {
  /**
   * Get Season
   * @returns {String}
   */
  getSeason() {
    return this.get('season');
  }
}

export default EpisodeModel;