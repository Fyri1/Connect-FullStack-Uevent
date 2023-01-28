import { v4 as uuidv4 } from 'uuid';
import Event from '../models/Event.js';

class EventService {
  async getAllEvents() {
    return await Event.getAll();
  }

  async getAllEventTickets(eventId) {
    return await Event.getAllTickets(eventId);
  }

  async sellTicket(userId, eventId) {
    return await Event.sellTicket(userId, eventId);
  }

  async ticketReturn(ticketId) {
    return await Event.ticketReturn(ticketId);
  }

  async createEvent(body) {
    const id = uuidv4();
    await Event.save({ id, ...body });
    return `create event ${body.title}`;
  }
}

export default new EventService();
