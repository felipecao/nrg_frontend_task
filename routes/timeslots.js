var express = require('express');
var router = express.Router();
var moment = require('moment');

const DATE_PATTERN = 'YYYY-MM-DD';

router.get('/', function(req, res, next) {

  const today = new Date();
  let slots = [];

  slots.push({
    date: moment().format(DATE_PATTERN), slots: [
      {start: "08:00", end: "08:30"},
      {start: "08:30", end: "09:00"},
      {start: "09:00", end: "09:30"},
      {start: "09:30", end: "10:00"},
      {start: "11:00", end: "11:30"},
      {start: "13:30", end: "14:00"},
    ]
  });

  slots.push({
    date: moment().add(1, 'days').format(DATE_PATTERN), slots: [
      {start: "08:45", end: "09:30"},
      {start: "09:30", end: "10:15"},
      {start: "10:15", end: "11:00"},
      {start: "13:00", end: "13:45"},
      {start: "15:00", end: "15:45"},
    ]
  });

  slots.push({
    date: moment().add(2, 'days').format(DATE_PATTERN), slots: [
      {start: "14:15", end: "14:30"},
      {start: "14:30", end: "14:45"},
      {start: "14:45", end: "15:00"},
      {start: "18:00", end: "18:15"},
      {start: "18:15", end: "18:30"},
    ]
  });

  slots.push({
    date: moment().add(3, 'days').format(DATE_PATTERN), slots: []
  });

  slots.push({
    date: moment().add(4, 'days').format(DATE_PATTERN), slots: []
  });

  slots.push({
    date: moment().add(5, 'days').format(DATE_PATTERN), slots: [
      {start: "14:15", end: "14:30"},
      {start: "14:30", end: "14:45"},
      {start: "14:45", end: "15:00"},
      {start: "18:00", end: "18:15"},
      {start: "18:15", end: "18:30"},
    ]
  });

  slots.push({
    date: moment().add(6, 'days').format(DATE_PATTERN), slots: []
  });

  res.status(200).send(slots);
});

module.exports = router;
