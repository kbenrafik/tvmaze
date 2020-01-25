import Model from '../../Model';

/**
 * Episode model
 * @class
 */
class SeasonModel extends Model {
  getNumber() {
    return this.get('number');
  }
}

export default SeasonModel;