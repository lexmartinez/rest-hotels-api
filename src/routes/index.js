import express from 'express';
import hotels from './hotels.routes';

const router  = express.Router();

hotels(router, '/hotels');
module.exports = router;