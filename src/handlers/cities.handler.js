'use strict';

import handler from './base.handler';

const collection = 'cities';

module.exports =  {

  getCities: (res) => {
    handler.getAll(collection, {}, res);
  }

};