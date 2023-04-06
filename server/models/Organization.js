import client from '../client.js';
import { stringify, v4 as uuidv4 } from 'uuid';
import ApiError from '../exceptions/api-error.js';
import _ from 'lodash';

class Organization {
  async getAllOrganization() {
    const data = await client('organization').select('*');
    return data;
  }

  async getStep(userId) {
    const organization = await this.findOrganizationByUserId(
      userId,
      'user_id',
      'name_organization',
      'secret_key',
      'is_confirmed'
    );
    if (!organization) {
      return {
        step1: false,
        step2: false,
        step3: false,
        step4: false,
        iter: 1,
      };
    }
    if (!organization.is_confirmed) {
      let countSteps = 1;
      for (const key in organization) {
        console.log(organization[key]);
        if (!_.isNull(organization[key]) && organization[key]) {
          countSteps += 1;
        }
      }

      return {
        step1: !!organization.user_id,
        step2: !!organization.secret_key,
        step3: !!organization.name_organization,
        step4: !!organization.is_confirmed,
        iter: countSteps,
      };
    }
    return { isConfirm: organization.is_confirmed };
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

  async findOrganizationByUserId(id, ...params) {
    const data = await client('organization')
      .select(...params)
      .where('user_id', '=', id);
    return data[0];
  }

  async findPromoCodeById(id) {
    const data = await client('promo_codes').select('*').where('id', '=', id);
    if (data.length === 0) {
      throw ApiError.BadRequest('promo code nema takogo dolben');
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

  async createOrganization(user_id) {
    const org = await this.findOrganizationByUserId(user_id);
    if (!_.isEmpty(org)) {
      return;
    }
    const id = uuidv4();
    await client('organization').insert({
      id,
      user_id,
    });
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
