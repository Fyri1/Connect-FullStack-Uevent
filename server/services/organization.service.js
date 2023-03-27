import { v4 as uuidv4 } from 'uuid';
import Organization from '../models/Organization.js';
import TokenService from './token-service.js';

class CategoryService {
  async getAllOrganization() {
    return await Organization.getAllOrganization();
  }

  async createOrganization({
    body: {
      name,
      phone_org,
      phone_staff,
      address,
      email,
      description,
      link_organization,
    },
    headers,
  }) {
    const token = headers.authorization.split(' ')[1];
    const { id: userId } = TokenService.validateAccessToken(token);
    const id = uuidv4();
    await User.saveOrganization({
      id,
      user_id: userId,
      name_organization: name,
      phone_organization: phone_org,
      phone_staff,
      addres: address,
      email,
      description,
      link_organization,
    });
    return 'Confirm mail';
  }

  async createPromoCodes(id, { count, discount }) {
    for (let i = 1; count >= i; i += 1) {
      await Organization.createPromoCode(id, discount);
    }
    return 'Create promo codes';
  }

  async subscriptionOrganization(organizationId, userId) {
    return await Organization.subscription(userId, organizationId);
  }

  async deleteCategory({ id }) {
    await Organization.deleteCategory(id);
    return `delete category ${id}`;
  }
}

export default new CategoryService();
