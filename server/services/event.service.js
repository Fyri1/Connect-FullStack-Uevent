import { v4 as uuidv4 } from 'uuid';
import Comment from '../models/Comment.js';
import Event from '../models/Event.js';
import axios from 'axios';
import Organization from '../models/Organization.js';

class EventService {
  async getAllEvents() {
    return await Event.getAll();
  }

  async getEventsById({ id }) {
    return await Event.findOne(id);
  }

  async createComment({ params: { id: eventId }, body: { content } }, userId) {
    const commentId = uuidv4();
    return await Comment.createComment(commentId, eventId, userId, content);
  }

  async getAllEventTickets(eventId) {
    return await Event.getAllTickets(eventId);
  }

  async getAllCategoriesByEventId({ id }) {
    return await Event.getAllCategories(id);
  }

  async payTicket(userId, eventId, infoCard) {
    const { user_id } = await Event.findOne(eventId);
    const { id: organozationId, name_organization } =
      await Organization.findOrganizationByUserId(user_id);
    const allTicketEvent = await Event.getAllTickets(eventId);
    const filterNotSoldTicket = allTicketEvent.filter((i) => !i.is_sold);
    if (filterNotSoldTicket.length === 0) {
      return 'Empty';
    }
    const responce = await axios.post('http://localhost:8081/pay', {
      ...infoCard,
      organozationId,
      orderId: filterNotSoldTicket[0].id,
      amount: filterNotSoldTicket[0].price,
      products: {
        name: `${name_organization} ticket`,
        price: filterNotSoldTicket[0].price,
      },
      signature: '',
    });
    console.log(responce.data);
    return { userId, eventId, infoCard };
    // await Event.sellTicket(userId, filterNotSoldTicket[0]);
    return;
  }

  async getAllUsersSellTicketByEventId({ eventId, id }) {
    return await Event.getAllUsersSellTicketByEventId(eventId, id);
  }

  async ticketReturn(ticketId) {
    return await Event.ticketReturn(ticketId);
  }

  async getAllCommentsEvent({ id }) {
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
