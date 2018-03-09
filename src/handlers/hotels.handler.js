'use strict';

import handler from './base.handler';

const collection = 'hotels';

module.exports =  {

  getHotels: (req, res) => {
    let query = {};
    if (req.query && req.query.city) {
       query = {city: req.query.city};
    }
    handler.getAll(collection, query, res);
  },

  getHotelById: (req, res) => {
    handler.getById(collection, req.params.id, res);
  }

};