import { v4 as uuidv4 } from 'uuid';
import Ticket from '../models/Event.js';

class TicketService {
  // async getAllEvents() {
  //   return await Event.getAll();
  // }

  // async getAllEventTickets(eventId) {
  //   return await Event.getAllTickets(eventId);
  // }

  // async sellTicket(userId, eventId) {
  //   return await Event.sellTicket(userId, eventId);
  // }
  async createTicket(eventId, count, price) {
    try {
      for (let i = 0; i < count; i += 1) {
        const ticket_id = uuidv4();
        await Ticket.saveTickets({ id: ticket_id, eventId, price });
      }
    } catch (err) {
      next(err);
    }
  }

  async returnTicket(ticketId) {
    return await Event.ticketReturn(ticketId);
  }

  // async createEvent(body) {
  //   const id = uuidv4();
  //   await Event.save({ id, ...body });
  //   return `create event ${body.title}`;
  // }
}

export default new TicketService();
