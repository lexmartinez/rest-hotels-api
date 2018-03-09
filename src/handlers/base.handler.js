'use strict';

import connection from '../db';

module.exports = {

  getAll: (key, query, res) =>{
    try{
      const db = connection();
      const collection = db.get(key);
      collection.find((query||{})).then((docs) => {
        db.close();
        res.send(docs)
      });
    }catch (err){
      res.status(500).send(err)
    }
  },
  getById: (key, id, res) =>{
    try{
      const db = connection();
      const collection = db.get(key);
      collection.findOne({_id:id}).then((docs) => {
        db.close();
        if(docs){
          res.send(docs)
        }else{
          res.status(404).send(docs);
        }

      });
    }catch (err){
      res.status(500).send(err)
    }
  }

};