var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  return res.status(200).send({
    links: {
      timeslots: {
        uri: '/timeslots',
        supportsMethods: ['GET']
      },
      appointments: {
        uri: '/appointments',
        supportsMethods: ['GET', 'POST']
      },
    }
  });
});

module.exports = router;
