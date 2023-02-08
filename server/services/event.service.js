import { v4 as uuidv4 } from 'uuid';
import Comment from '../models/Comment.js';
import Event from '../models/Event.js';

class EventService {
  async getAllEvents() {
    return await Event.getAll();
  }

  async getEventsById({ id }) {
    return await Event.findId(id);
  }

  async createComment({ params: { id: postId }, body: { content } }, userId) {
    return await Comment.createComment(postId, userId, content);
  }

  async getAllEventTickets(eventId) {
    return await Event.getAllTickets(eventId);
  }

  async getAllCategoriesByEventId({ id }) {
    return await Event.getAllCategories(id);
  }

  async sellTicket(userId, eventId) {
    return await Event.sellTicket(userId, eventId);
  }

  async ticketReturn(ticketId) {
    return await Event.ticketReturn(ticketId);
  }

  async getAllCommentEvent(id) {
    return await Event.getAllCommentsEvent(id);
  }

  async createEvent(body) {
    const id = uuidv4();
    await Event.save({ id, ...body });
    return `create event ${body.title}`;
  }

  async updateEvent({ body, params: { id } }) {
    await Event.updateEvent({ id, ...body });
    return `create event ${body.title}`;
  }

  async deleteEvent(id) {
    await Event.deleteEvent(id);
  }
}

export default new EventService();
