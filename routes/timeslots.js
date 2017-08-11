var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200).send([
    {
      date: "2017-08-30", slots: [
        {start: "08:00", end: "08:30"},
        {start: "08:30", end: "09:00"},
        {start: "09:00", end: "09:30"},
        {start: "09:30", end: "10:00"},
        {start: "11:00", end: "11:30"},
        {start: "13:30", end: "14:00"},
      ]
    },
    {
      date: "2017-09-02", slots: [
        {start: "08:45", end: "09:30"},
        {start: "09:30", end: "10:15"},
        {start: "10:15", end: "11:00"},
        {start: "13:00", end: "13:45"},
        {start: "15:00", end: "15:45"},
      ]
    },
    {
      date: "2017-09-05", slots: [
        {start: "14:15", end: "14:30"},
        {start: "14:30", end: "14:45"},
        {start: "14:45", end: "15:00"},
        {start: "18:00", end: "18:15"},
        {start: "18:15", end: "18:30"},
      ]
    },
  ]);
});

module.exports = router;
