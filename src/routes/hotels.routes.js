'use strict';

module.exports = (router, preffix) => {

  router.get(preffix, (req, res) => {
    res.send([])
  });

  router.get(`${preffix}/:id`, (req, res) => {
    // db.getById(req.params.collection, req.params.id, res)
    res.send({})
  });

};
