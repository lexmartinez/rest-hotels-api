'use strict';

import express from 'express';
import hotels from './hotels.routes';
import cities from './cities.routes';

const router  = express.Router();

hotels(router, '/hotels');
cities(router, '/cities');

module.exports = router;