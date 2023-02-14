import ticketService from '../services/ticket.service.js';
import tokenService from '../services/token-service.js';
import { v4 as uuidv4 } from 'uuid';

class Tickets {
  async getAllTikets(_req, _res) {
    return await ticketService.getAllTickets();
  }
  async createTickets(req, _res, _next) {
    return ticketService.createTicket(req.body);
  }
  async returnTicketEvent(req, _res, _next) {
    const {
      params: { id },
      headers: { authorization },
    } = req;
    const token = authorization.split(' ')[1];
    const data = tokenService.validateAccessToken(token);
    return ticketService.returnTicket({ ticketId: id, userId: data.id });
  }
}

export default new Tickets();
