import client from '../client.js';

class Event {
  async findId(id) {
    const data = await client('events').select('*').where('id', '=', id);
    if (data.length === 0) {
      throw ApiError.NotFound('event not found');
    }
    return data[0];
  }

  async getAllEvents() {
    const data = await client('events').select('*');
    return data;
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
