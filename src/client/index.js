import Client from './Client';

/**
 * Make a new instance of client
 * @param {Object} config
 * @returns {Client}
 */
export const makeClient = (config) => new Client(config = {});