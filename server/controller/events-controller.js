import EventService from '../services/event.service.js';

class Events {
  async getAllEvents(_req, _res) {
    const result = await EventService.getAllEvents();
    return result;
  }

  async getEventsById(req, res) {}

  async createEvent(req, _res) {
    const result = await EventService.createEvent(req.body);
    return result;
  }

  async updateEvent(data) {}
  async deleteEvent(data) {}
}

export default new Events();
