'use strict';

import handler from '../handlers/cities.handler';

module.exports = (router, preffix) => {

  router.get(preffix, (req, res) => {
    handler.getCities(res)
  });

};
