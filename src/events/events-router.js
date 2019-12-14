const express = require('express');
const EventsService = require('./events-service');
const eventsRouter = express.Router();
const bodyParser = express.json();
const logger = require('../logger');
const xss = require('xss');

const serializeEvent = event => ({
  id: parseInt(event.id),
  organizer: parseInt(event.organizer),
  title: xss(event.title),
  event_purpose: xss(event.event_purpose),
  restaurant: xss(event.restaurant),
  address: xss(event.address),
  date: new Date(event.date),
  time: event.time,
  description: xss(event.description),
  singles_only: event.singles_only,
  date_created: new Date(event.date_created)
  })


eventsRouter
  .route('/api/events')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db')
    EventsService.getAllEvents(knexInstance)
    .then(events => { 
      res.json(events.map(serializeEvent))
    })
    .catch(next)
  })
  .post(bodyParser, (req, res, next) => {
    const { organizer, title, event_purpose, restaurant, address, date, time, description, singles_only } = req.body;
    const requiredFields = { organizer, title, event_purpose, restaurant, address, date, time, description, singles_only };
    
    for (const [key, value] of Object.entries(requiredFields)) {
      if (value == null) {
        return res.status(400).json({
          error: { message: `Missing '${key}' in request body` }
        })
      }
    }  
  
     const newEvent = {
      organizer,
      title,
      event_purpose,
      restaurant,
      address,
      date,
      time,
      description,
      singles_only
    }
  
  
    EventsService.insertEvent(req.app.get('db'), newEvent)
    .then(eventId => {
      res
      .status(204).end();
    })
    .catch(next);
  })

eventsRouter
  .route('/api/events/:event_id')
  .get((req, res, next) => {
    res.json(serializeEvent(res.event));
  })
  .patch(bodyParser, (req, res, next) => {
    const { event_id } = req.params; //parseInt() for integers
    const {organizer, title, event_purpose, restaurant, address, date, time, description, singles_only} = req.body;
    const requiredFields = { organizer, title, event_purpose, restaurant, address, date, time, description, singles_only };
  
    for (const [key, value] of Object.entries(requiredFields)) {
      if (value == null) {
        return res.status(400).json({
          error: { message: `Missing '${key}' in request body` }
        })
      }
    } 
  
    const updates = {organizer, title, event_purpose, restaurant, address, date, time, description, singles_only};
    EventsService.updateEventById(req.app.get('db'), event_id, updates)
    .then(() => {
      res.status(204).end();
    })
    .catch(next);
  })
  .delete((req, res, next) => {
    if(!req.params.event_id){
      logger.error(`Event id is required.`);
      return res.status(400).send('Invalid data')
    }
    EventsService.deleteEvent(res.app.get('db'), req.params.event_id)
      .then( (count) => {
        if(count === 0){
          return res.status(404).json({
            error: { message: `Event does not exist`}
          })
        }
        res
        .status(204)
        .end();
      })
      .catch(next)
      logger.info(`Event with event_id ${req.params.event_id} deleted.`);  
  })

module.exports = eventsRouter