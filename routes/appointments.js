var express = require('express');
var router = express.Router();

const appointments = [];
const stylists = ['Julia', 'Ligia', 'Alex', 'Felipe', 'Daniela', 'Sebastian', 'Shaun', 'Dmitrii', 'Antonella'];

function randomStylist() {
  const randomIndex = Math.floor(Math.random() * stylists.length);

  return stylists[randomIndex];
}

router.post('/', function(req, res, next) {
  if (!req.body.date || !req.body.slot || !req.body.orderConfirmationComment || !req.body.phone) {
    return res.status(400).send({error: "Object payload is malformed. Expected format is {date: 'yyyy-MM-dd', slot: 'HH:mm', orderConfirmationComment: 'TEXT', phone: '+4901234567890'}"});
  }

  const confirmation = Object.assign({stylist: randomStylist()}, req.body);

  appointments.push(confirmation);
  console.log(`A new appointment has been created: ${JSON.stringify(confirmation)}`);
  
  res.status(201).send(confirmation);
});

router.get('/', function(req, res, next) {
  res.status(200).send(appointments);
});

module.exports = router;
