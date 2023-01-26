import { v4 as uuidv4 } from 'uuid';

import Event from '../models/Event.js';
import ApiError from '../exceptions/api-error.js';

class Events {
  async getAllEvents(req, res) {
    const events = await Event.getAllEvents();
    res.status(200);
    res.json({ events });
  }
  async getEventsById(id) {}
  async createEvent(req, res) {
    const id = uuidv4();
    const userId = uuidv4();
    await Event.save({ id, userId, ...req.body });
    res.json({
      massage: 'create event',
    });
  }
  async updateEvent(data) {}
  async deleteEvent(data) {}
}

export default new Events();
