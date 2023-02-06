import userService from '../services/user.service.js';
import encrypt from '../encrypt.js';
import { v4 as uuidv4 } from 'uuid';
import User from '../models/User.js';

class Users {
  async getAllUsers(_req, res) {
    return await userService.getAllUser();
  }

  async getUserById(req, _res) {
    return await userService.getUserById(req.params);
  }
  async createUser(req, _res, next) {
    return await userService.createUser(req.body);
  }

  async updateUserData(req, _res) {
    return await userService.updateUserData(req);
  }

  async changePassword(req, _res) {}
  async upadateEmail(req, _res) {}

  async deleteUser(req, _res) {
    return userService.deleteUser(req.headers['authorization']);
  }
}

export default new Users();
