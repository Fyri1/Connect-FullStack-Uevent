import EventService from '../services/event.service.js';

class Events {
  constructor() {
    this.eventService = new EventService();
  }

  async getAllEvents(req, res) {
    const events = await Event.getAllEvents();
    res.status(200);
    res.json({ events });
  }

  async getEventsById(req, res) {}

  async createEvent(req, _res) {
    const result = await this.eventService.createEvent(req.body);
    return result;
  }

  async updateEvent(data) {}
  async deleteEvent(data) {}
}

export default new Events();
