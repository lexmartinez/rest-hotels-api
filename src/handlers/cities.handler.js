'use strict';

import handler from './base.handler';

module.exports =  {

  getCities: (res) => {
    handler.getAll('cities', {}, res);
  }

};