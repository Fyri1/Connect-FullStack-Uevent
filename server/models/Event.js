import client from '../client.js';
import Ticket from './Ticket.js';
import Category from './Category.js';
import ApiError from '../exceptions/api-error.js';
import _ from 'lodash';
import Comment from './Comment.js';
import User from './User.js';

class Event {
  async getAll() {
    try {
      const data = await client('events').select('*');
      const events = data.map(async (event) => {
        const tickets = await this.getAllTickets(event.id)
        const eventCategories = await this.getAllCategories(event.id);
        const priceTicket = tickets[0].price;
        return { ...event, priceTicket, categories: eventCategories }
      })
      return Promise.all(events);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async findOne(id) {
    const data = await client('events').select('*').where('id', '=', id);
    if (data.length === 0) {
      throw ApiError.NotFound('event not found');
    }
    const tickets = await this.getAllTickets(data[0].id)
    const eventCategories = await this.getAllCategories(data[0].id);
    return { ...data[0], priceTicket: tickets[0].price, categories: eventCategories };
  }


  async getAllTickets(id) {
    try {
      const data = await client('tickets')
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

  async getAllUsersSellTicketByEventId(event_id, userId) {
    try {
      const ticketsEvent = await this.getAllTickets(event_id);
      const soldTicket = ticketsEvent.filter(({ is_sold }) => is_sold);
      const promises = soldTicket.map(async ({ id }) => {
        const data = await client('user_tickets')
          .select('user_id')
          .where('ticket_id', '=', id);
        return data[0];
      });
      const [{ role }] = await User.getRole(userId);
      const userIds = await Promise.all(promises);
      const users = userIds.map(async ({ user_id }) => {
        const userData = await User.findUserId(user_id);
        if (userData.hidden && role !== 'organization' && userId !== user_id) {
          return [];
        }
        return userData;
      });
      const allUsers = await Promise.all(users);
      return allUsers.filter((item) => item.length !== 0);
    } catch (err) {
      throw err;
    }
  }


  async sellTicket(userId, ticket) {
    try {
      await Ticket.soldTicket(ticket.id);
      await client('user_tickets').insert({
        ticket_id: ticket.id,
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

  async getAllCommentsEvent(eventId) {
    const commentsId = await client('event_comments')
      .select('comment_id')
      .where('event_id', '=', eventId);
    console.log(commentsId);
    const commentsEvent = commentsId.map(async ({ comment_id }) => {
      const data = await client('comments')
        .select('*')
        .where('id', '=', comment_id);
      return data[0];
    });
    return Promise.all(commentsEvent);
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
      const allCommentsEvent = await this.getAllCommentsEvent(id);
      await Comment.deleteAllCommentEvent(allCommentsEvent);
      return 'delete event';
    } catch (err) {
      throw err;
    }
  }
}

export default new Event();
