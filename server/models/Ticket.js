import client from '../client.js';
import ApiError from '../exceptions/api-error.js';

class Ticket {
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
  async returnTicket(id) {
    try {
      await client('ticket').where('id', '=', id).update('is_sold', false);
    } catch (err) {
      throw err;
    }
  }
}

export default new Ticket();
