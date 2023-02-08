import { v4 as uuidv4 } from 'uuid';
import Organization from '../models/Organization.js';
import TokenService from './token-service.js';

class CategoryService {
  async getCategoryById({ id }) {
    return await Organization.findCategoryId(id);
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

  async deleteCategory({ id }) {
    await Organization.deleteCategory(id);
    return `delete category ${id}`;
  }
}

export default new CategoryService();