var express = require('express');
var router = express.Router();

const appointments = [];

router.post('/', function(req, res, next) {
  if (!req.body.date || !req.body.slot) {
    return res.status(400).send({error: "Object payload is malformed. Expected format is {date: 'yyyy-MM-dd', slot: 'HH:mm'}"});
  }

  appointments.push(req.body);

  console.log(`A new appointment has been created: ${JSON.stringify(req.body)}`);
  res.status(201).send();
});

router.get('/', function(req, res, next) {
  res.status(201).send(appointments);
});

module.exports = router;
