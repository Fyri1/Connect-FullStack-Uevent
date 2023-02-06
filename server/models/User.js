import client from '../client.js';
import ApiError from '../exceptions/api-error.js';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import Event from './Event.js';

class User {
  constructor() {
    this.guest = false;
  }

  async findUserId(id) {
    const data = await client('users')
      .select(
        'id',
        'login',
        'email',
        'first_name',
        'second_name',
        'last_name',
        'created_at'
      )
      .where('id', '=', id);
    if (data.length === 0) {
      throw ApiError.NotFound('user not found');
    }
    return data[0];
  }

  async getAllUsers() {
    // ya tak ponimau ti eto spizdil iz usofa ibo zapros hyinya
    const data = await client('users').select('*');
    return data;
  }
  async getAllEventsByUserId(id) {
    return await client('events').select('id').where('user_id', '=', id);
  }

  async getRole(id) {
    return await client('roles').select('role').where('user_id', '=', id);
  }

  async saveUser({ id, login, password, email, link, active }) {
    try {
      await client('users').insert({
        id,
        login,
        password,
        email,
        event_link: link,
        active,
      });
    } catch (err) {
      if (!err.toString().match(/ignore/)) {
        console.log(err);
        throw err;
      }
    }
  }

  async setRole(userId, role) {
    try {
      const id = uuid4();
      await client('role').insert({
        id,
        user_id: userId,
        role,
      });
    } catch (err) {
      throw err;
    }
  }

  async isEqualLogin(login) {
    try {
      const data = await client('users')
        .select({
          name: 'login',
        })
        .where('login', '=', login);
      return data.length !== 0;
    } catch (err) {
      if (!err.toString().match(/ignore/)) {
        throw new Error(err.code + ': ' + err.message);
      }
    }
  }

  async isEqualEmail(email) {
    try {
      const data = await client('users')
        .select({
          email: 'email',
        })
        .where('email', '=', email);
      return data.length !== 0;
    } catch (err) {
      if (!err.toString().match(/ignore/)) {
        throw new Error(err.code + ': ' + err.message);
      }
    }
  }

  async initUser(colName, value) {
    try {
      const data = await client('users')
        .select('id', 'login', 'password', 'email', 'created_at')
        .where(colName, '=', value);
      if (data.length === 0) {
        throw ApiError.UnknowUser('User does not exist');
      }
      return { ...data[0] };
    } catch (err) {
      throw err;
    }
  }

  async resetPassword(id, newPassword) {
    try {
      await client('users')
        .where('id', '=', id)
        .update('password', newPassword);
    } catch (err) {
      throw err;
    }
  }
  async updateEmail(id, email) {
    try {
      await client('users').where('id', '=', id).update('email', email);
    } catch (err) {
      throw err;
    }
  }
async updatePassword(id, password, oldPassword) {
  try {
    const { password: userOldPassword } = await this.initUser('id', id);
    const isExist = await bcrypt.compare(oldPassword, userOldPassword);
    if (!isExist) {
      throw ApiError.IncorrectData('password gavno, ne sovpadaet so starim :)')
    }
    await client('users').where('id', '=', id).update('password', password);
  } catch (err) {
    throw err;
  }
}

  async updateUserDate(
    id,
    {
      login,
      firstName: first_name,
      secondName: second_name,
      lastName: last_name,
    }
  ) {
    try {
      await client('users').where('id', '=', id).update({
        login,
        first_name,
        second_name,
        last_name,
      });
    } catch (err) {
      throw err;
    }
  }
  async deleteUserRole(id) {
    await client('roles').where('user_id', '=', id).del();
  }

  async dropUser(id) {
    try {
      await this.findUserId(id);
      await client('users').where('id', '=', id).del();
      const eventsId = await this.getAllEventsByUserId(id);
      const promises = eventsId.map(({ id }) => Event.deleteEvent(id));
      await this.deleteUserRole(id);
      await Promise.all(promises);
    } catch (err) {
      throw err;
    }
  }

  async deleteLink(id) {
    try {
      await client('users').where('id', '=', id).update('link_event', null);
    } catch (err) {
      throw err;
    }
  }

  async setActive(id) {
    try {
      await client('users').where('id', '=', id).update('active', true);
    } catch (err) {
      throw err;
    }
  }

  async setLink(id, link) {
    try {
      await client('users').where('id', '=', id).update('link_event', link);
    } catch (err) {
      throw err;
    }
  }

  async getValue(id, search) {
    const data = await client('users').select(search).where('id', '=', id);
    return { ...data[0] };
  }
}

export default new User();
