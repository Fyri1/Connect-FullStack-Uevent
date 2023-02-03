import client from '../client.js';
import ApiError from '../exceptions/api-error.js';

class Ticket {
  async getAll() {
    const data = await client('tickets').select('*');
    return data;
  }
  // async findTiketId(id) {
  //   const data = await client('user_tickets')
  //     .where('id', '=', id)
  //     .join('user')
  //     .select('*');
  //   if (data.length === 0) {
  //     throw ApiError.NotFound('user not found');
  //   }
  //   return data[0];
  // }

  async saveTickets({ id, eventId, price }) {
    try {
      await client('ticket').insert({
        id,
        event_id: eventId,
        price,
      });
    } catch (err) {
      if (!err.toString().match(/ignore/)) {
        console.log(err);
        throw err;
      }
    }
  }

  // async dropUser(id) {
  //   try {
  //     await client('users').where('id', '=', id).del();
  //   } catch (err) {
  //     throw err;
  //   }
  // }

  async soldTicket(id) {
    try {
      await client('ticket').where('id', '=', id).update('is_sold', true);
    } catch (err) {
      throw err;
    }
  }
  async inactiveTicket(id) {
    try {
      await client('ticket').where('id', '=', id).update('is_sold', false);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async ticketReturn(ticketId, userId) {
    try {
      const data = await client('user_tickets')
        .select('*')
        .where('ticket_id', '=', ticketId)
        .andWhere('user_id', '=', userId);
      if (data.length === 0) {
        return ApiError.AccessDenied();
      }
      await this.inactiveTicket(ticketId);
      await client('user_tickets')
        .select('*')
        .where('ticket_id', '=', ticketId)
        .del();
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

}

export default new Ticket();
