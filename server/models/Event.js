import client from '../client.js';
import Ticket from './Ticket.js';
import Category from './Category.js';
import ApiError from '../exceptions/api-error.js';
import _ from 'lodash';

class Event {
  async getAll() {
    try {
      const data = await client('events').select('*');
      return data;
    } catch (err) {
      console.log(err);
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
      console.log(err);
      throw err;
    }
  }

  async getAllCategories(id) {
    try {
      const data = await client('event_categories')
        .select('category_id')
        .where('event_id', '=', id);
      const promisesCategoriesEvent = data.map(({ category_id }) =>
        Category.findCategoryId(category_id)
      );
      return await Promise.all(promisesCategoriesEvent);
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
        return 'Emptu';
      }
      await Ticket.soldTicket(filterNotSoldTicket[0].id);
      await client('user_tickets').insert({
        ticket_id: filterNotSoldTicket[0].id,
        user_id: userId,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async save({
    id,
    userId,
    title,
    description,
    city,
    address,
    poster,
    eventStart,
    eventEnd,
    ...category
  }) {
    try {
      await client('events').insert({
        id,
        user_id: userId,
        title,
        description,
        city,
        address,
        poster,
        event_start: eventStart,
        event_end: eventEnd,
      });
      const promises = Object.values(category).map((categoryId) =>
        client('event_categories').insert({
          event_id: id,
          category_id: categoryId,
        })
      );
      await Promise.all(promises);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async updateEvent({
    id,
    title,
    description,
    city,
    address,
    poster,
    eventStart,
    eventEnd,
    ...categories
  }) {
    try {
      await client('events')
        .update({
          title,
          description,
          city,
          address,
          poster,
          event_start: eventStart,
          event_end: eventEnd,
        })
        .where('id', '=', id);
      await updateCategories(id, categories);
    } catch (err) {
      throw err;
    }
  }

  async updateCategories(id, categories = []) {
    try {
      const eventCategories = await this.getAllCategories(id);
      const idOldCategory = eventCategories.map(({ id }) => id);
      const idNewCategories = Object.values(categories);

      if (_.isEqual(idOldCategory, idNewCategories)) {
        return;
      }
      await client('event_categories').where('event_id', '=', id).del();
      const promises = idNewCategories.map(
        async (category_id) =>
          await client('event_categories').insert({
            event_id: id,
            category_id: category_id,
          })
      );
      await Promise.all(promises);
    } catch (err) {
      throw err;
    }
  }

  async isEqualTitle(title, { id = '' }) {
    try {
      const data = await client('events')
        .select('*')
        .where('title', '=', title);
      if (data[0].id === id) {
        return false;
      }
      return data.length !== 0;
    } catch (err) {
      throw err;
    }
  }
  async deleteEvent(id) {
    try {
      console.log(id);
      await client('events').where('id', '=', id).del();
      await this.updateCategories(id);
      await Ticket.daleteTickets(id);
      return 'delete event';
    } catch (err) {
      throw err;
    }
  }
}

export default new Event();
