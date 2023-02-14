import client from '../client.js';
import { v4 as uuidv4 } from 'uuid';

class Organization {
  async getAllOrganization() {
    try {
      const data = await client('organization').select('*');
      return data;
    } catch (err) {
      throw err;
    }
  }

  async findOrganizationId(id) {
    try {
      const data = await client('organization')
        .select('*')
        .where('id', '=', id);
      return data[0];
    } catch (err) {
      throw err;
    }
  }

  async findOrganizationByUserId(id) {
    try {
      const data = await client('organization')
        .select('*')
        .where('user_id', '=', id);
      return data[0];
    } catch (err) {
      throw err;
    }
  }

  async isEqualNameOrganization(name) {
    try {
      const data = await client('organization')
        .select('*')
        .where('name_organization', '=', name);
      return data.length !== 0;
    } catch (err) {
      if (!err.toString().match(/ignore/)) {
        throw new Error(err.code + ': ' + err.message);
      }
    }
  }

  async saveOrganization(data) {
    try {
      await client('organization').insert(data);
    } catch (err) {
      if (!err.toString().match(/ignore/)) {
        console.log(err);
        throw err;
      }
    }
  }
}

export default new Organization();
