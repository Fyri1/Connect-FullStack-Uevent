import client from '../client.js';
import Ticket from './Ticket.js';

class Event {
  async getAll() {
    try {
      const data = await client('events').select('*');
      return data;
    } catch (err) {
      throw err;
    }
  }

  async getAllTickets(id) {
    try {
      const data = await client('ticket')
        .select('*')
        .where('event_id', '=', id);
      return data;
    } catch (err) {
      throw err;
    }
  }

  async findId(id) {
    const data = await client('events').select('*').where('id', '=', id);
    if (data.length === 0) {
      throw ApiError.NotFound('event not found');
    }
    return data[0];
  }

  async sellTicket(userId, eventId) {
    try {
      const allTicketEvent = await this.getAllTickets(eventId);
      const filterNotSoldTicket = allTicketEvent.filter((i) => !i.is_sold);
      if (filterNotSoldTicket.length === 0) {
        throw 'Empty';
      }
      await Ticket.soldTicket(filterNotSoldTicket[0].id);
      await client('user_tickets').insert({
        ticket_id: filterNotSoldTicket[0].id,
        user_id: userId,
      });
    } catch (err) {
      throw err;
    }
  }

  async ticketReturn(ticketId) {
    try {
      await Ticket.returnTicket(ticketId);
      await client('user_tickets')
        .select('*')
        .where('ticket_id', '=', ticketId)
        .del();
    } catch (err) {
      throw err;
    }
  }

  async save({
    id,
    userId,
    title,
    description,
    category,
    city,
    address,
    poster,
    eventStart,
    eventEnd,
  }) {
    try {
      await client('events').insert({
        id,
        user_id: userId,
        title,
        description,
        category,
        city,
        address,
        poster,
        event_start: eventStart,
        event_end: eventEnd,
      });
    } catch (err) {
      throw err;
    }
  }

  async isEqualTitle(title) {
    try {
      const data = await client('events')
        .select('*')
        .where('title', '=', title);
      return data.length !== 0;
    } catch (err) {
      throw err;
    }
  }

  async update(id, date) {
    try {
      await client('events').where('id', '=', id).update({
        login: date.login,
        // password: date.password,
        full_name: date.fullName,
        email: date.email,
        profile_pic: date.avatar,
      });
    } catch (err) {
      throw err;
    }
  }

  async drop(id) {
    try {
      await client('users').where('id', '=', id).del();
    } catch (err) {
      throw err;
    }
  }

  async logout(id) {
    try {
      await client('users').where('id', '=', id).update('token', null);
    } catch (err) {
      throw err;
    }
  }
}

export default new Event();
