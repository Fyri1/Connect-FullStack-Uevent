import { v4 as uuidv4 } from 'uuid';
import Event from '../models/Event.js';

export default class EventService {
  async createEvent(body) {
    const id = uuidv4();
    const userId = uuidv4();
    // await Event.save({ id, userId, ...body });
    return `create event ${body.title}`;
  }
}
