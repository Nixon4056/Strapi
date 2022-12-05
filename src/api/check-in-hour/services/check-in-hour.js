'use strict';

/**
 * check-in-hour service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::check-in-hour.check-in-hour');
