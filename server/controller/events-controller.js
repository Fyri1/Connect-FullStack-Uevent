import EventService from '../services/event.service.js';
import TokenService from '../services/token-service.js';

class Events {
  async getAllEvents(_req, _res) {
    const result = await EventService.getAllEvents();
    return result;
  }

  async getAllEventTickets(req, _res) {
    const { id: eventId } = req.params;
    const result = await EventService.getAllEventTickets(eventId);
    return {
      tickets: result,
      count: result.length,
      ticketsLeft: result.filter((i) => !i.is_sold).length,
    };
  }

  async sellTicketEvent(req, _res) {
    const { id: eventId } = req.params;
    const token = req.headers.authorization.split(' ')[1];
    const { id: userId } = TokenService.validateAccessToken(token);
    const result = await EventService.sellTicket(userId, eventId);
    return result;
  }

  async returnTicketEvent(req, _res) {
    const { id: ticketId } = req.params;
    const token = req.headers.authorization.split(' ')[1];
    TokenService.validateAccessToken(token);
    const result = await EventService.ticketReturn(ticketId);
    return result;
  }

  async getEventsById(req, res) {}

  async createEvent(req, _res) {
    const token = req.headers.authorization.split(' ')[1];
    const { id } = TokenService.validateAccessToken(token);
    const result = await EventService.createEvent({ ...req.body, userId: id });
    return result;
  }

  async updateEvent(data) {}
  async deleteEvent(data) {}
}

export default new Events();
