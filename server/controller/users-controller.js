import User from '../models/User.js';
import encrypt from '../encrypt.js';
import { v4 as uuidv4 } from 'uuid';

class Users {
  async getAllUsers(_req, res) {
    const users = await User.getAllUsers();
    res.status(200);
    res.json({ values: users });
  }
  
  async getUserById(req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.findUserId(id);
      if (user.length) {
      }
      res.status(200);
      res.json({ ...user });
    } catch (err) {
      next(err);
    }
  }
  async createUser(req, res, next) {
    try {
      const id = uuidv4();
      const dataUser = req.body;
      const enpryptPassword = encrypt(dataUser.password);
      console.log({ ...dataUser, id, password: enpryptPassword });
      // User.saveUser({ ...dataUser, id, password: enpryptPassword });
      res.status(201);
      res.json({ massage: `User ${dataUser.login} create` });
    } catch (err) {
      next(err);
    }
  }

  async updateUserData(req, res) {
    try {
      const updateData = req.body;
      const { id } = req.params;
      // const encryptedPassword = encrypt(updateData.password);
      User.updateUserDate(id, {
        ...updateData,
        //  password: encryptedPassword
      });
      res.status(200);
      res.json({ success: `update data user ${updateData.login}` });
    } catch (err) {
      console.log(err);
      res.status(500);
      res.end();
    }
  }
  async deleteUser(req, res, next) {
    try {
      const { id } = req.params;
      await User.dropUser(id);
      res.status(200);
      res.json({ massage: 'User delete' });
    } catch (err) {
      next(err);
    }
  }
}

export default new Users();
