import ApiError from '../exceptions/api-error.js';
import { v4 as uuidv4 } from 'uuid';
import Event from '../models/Event.js';

class Events {
  getAllEvents() {}
  getEventsById(id) {}
  async createEvent(_, res) {
    res.json({
      massage: 'create event',
    });
  }
  updateEvent(data) {}
  deleteEvent(data) {}
}

export default new Events();
