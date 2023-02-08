import eventService from '../services/event.service.js';
import TokenService from '../services/token-service.js';

class Events {
  async getAllEvents(_req, _res) {
    const result = await eventService.getAllEvents();
    return result;
  }

  async getAllEventTickets(req, _res) {
    const { id: eventId } = req.params;
    const result = await eventService.getAllEventTickets(eventId);
    return {
      tickets: result,
      count: result.length,
      ticketsLeft: result.filter((i) => !i.is_sold).length,
    };
  }

  async getAllCategoriesByEventId(req, _res) {
    return await eventService.getAllCategoriesByEventId(req.params);
  }

  async sellTicketEvent(req, _res) {
    const { id: eventId } = req.params;
    const token = req.headers.authorization.split(' ')[1];
    const { id: userId } = TokenService.validateAccessToken(token);
    const result = await eventService.sellTicket(userId, eventId);
    return result;
  }

  async returnTicketEvent(req, _res) {
    const { id: ticketId } = req.params;
    const token = req.headers.authorization.split(' ')[1];
    TokenService.validateAccessToken(token);
    const result = await eventService.ticketReturn(ticketId);
    return result;
  }

  async getEventsById(req, _res) {
    return await eventService.getEventsById(req.params);
  }

  async createEvent(req, _res) {
    const token = req.headers.authorization.split(' ')[1];
    const { id } = TokenService.validateAccessToken(token);
    const result = await eventService.createEvent({ ...req.body, userId: id });
    return result;
  }

  async getAllComments({ id }) {
    return eventService.getAllCommentEvent(id);
  }

  async createComment(req, _res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw ApiError.BadRequest('Invalid ti', errors.array());
    }
    const token = req.headers.authorization.split(' ')[1];
    const { id } = TokenService.validateAccessToken(token);
    return await eventService.createComment(req, id);
  }

  async updateEvent(req, _res) {
    return await eventService.updateEvent(req);
  }
  async deleteEvent(req, _res) {
    return await eventService.deleteEvent(req.params.id);
  }
}

export default new Events();
