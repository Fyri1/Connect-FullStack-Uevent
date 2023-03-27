import client from '../client.js';
import { v4 as uuidv4 } from 'uuid';
import ApiError from '../exceptions/api-error.js';

class Organization {
  async getAllOrganization() {
    const data = await client('organization').select('*');
    return data;
  }

  async createPromoCode(userId, discount) {
    const id = uuidv4();
    const organization = await this.findOrganizationByUserId(userId);
    await client('promo_codes').insert({
      id,
      organization_id: organization.id,
      discount,
    });
  }

  async findOrganizationId(id) {
    const data = await client('organization').select('*').where('id', '=', id);
    return data[0];
  }

  async findOrganizationByUserId(id) {
    const data = await client('organization')
      .select('*')
      .where('user_id', '=', id);
    return data[0];
  }

  async findPromoCodeById(id) {
    const data = await client('promo_codes').select('*').where('id', '=', id);
    if (data.length === 0) {
      throw ApiError.BadRequest('promo code nema takogo dolben')
    }
    return data[0];
  }

  async isEqualNameOrganization(name) {
    const data = await client('organization')
      .select('*')
      .where('name_organization', '=', name);
    return data.length !== 0;
  }

  async saveOrganization(data) {
    await client('organization').insert(data);
  }

  async subscription(user_id, organization_id) {
    const isEmpty = await client('organizer_subscriptions')
      .select('*')
      .where('user_id', '=', user_id);

    if (isEmpty.length !== 0) {
      await client('organizer_subscriptions')
        .where('user_id', '=', user_id)
        .del();
    } else {
      await client('organizer_subscriptions').insert({
        user_id,
        organization_id,
      });
    }
  }
}

export default new Organization();
