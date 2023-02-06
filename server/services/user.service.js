import { body } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';
import encrypt from '../encrypt.js';
import User from '../models/User.js';
import tokenService from './token-service.js';

class UserService {
  async getAllUser() {
    return await User.getAllUsers();
  }

  async getUserById({ id }) {
    return await User.findUserId(id);
  }

  async updateUserData({ params: { id }, body: data }) {
    await User.updateUserDate(id, data);
  }

  async createUser(body) {
    const id = uuidv4();
    await User.createUser({ id, ...body });
    return `create category ${body.title}`;
  }
  async changePassword(id, password) {
    const encryptedPassword = await encrypt(password);
    return await User.updatePassword(id, encryptedPassword);
  }

  async deleteUser(bearerToken) {
    const token = bearerToken.split(' ')[1];
    const { id } = tokenService.validateAccessToken(token);
    await User.dropUser(id);
    return `delete category ${id}`;
  }
}

export default new UserService();
