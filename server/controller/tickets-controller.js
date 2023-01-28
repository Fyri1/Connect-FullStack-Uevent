import ticketService from '../services/ticket.service.js';
import encrypt from '../encrypt.js';
import { v4 as uuidv4 } from 'uuid';

class Tickets {
  // async getAllTikets(_req, res) {
  //   const users = await User.getAllUsers();
  //   res.status(200);
  //   res.json({ values: users });
  // }

  // async getUserById(req, res, next) {
  //   try {
  //     const { id } = req.params;
  //     const user = await User.findUserId(id);
  //     if (user.length) {
  //     }
  //     res.status(200);
  //     res.json({ ...user });
  //   } catch (err) {
  //     next(err);
  //   }
  // }
  async createTickets(req, _res, _next) {
    return ticketService.createTicket(req.body);
  }
  async returnTicketEvent(req, _res, _next) {
    const {
      params: { id },
      headers,
    } = req;
    console.log(id, headers);
    // return ticketService.returnTicket(req.body, req.headers);
  }
  // async updateUserData(req, res) {
  //   try {
  //     const updateData = req.body;
  //     const { id } = req.params;
  //     // const encryptedPassword = encrypt(updateData.password);
  //     User.updateUserDate(id, {
  //       ...updateData,
  //       //  password: encryptedPassword
  //     });
  //     res.status(200);
  //     res.json({ success: `update data user ${updateData.login}` });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500);
  //     res.end();
  //   }
  // }
  // async deleteUser(req, res, next) {
  //   try {
  //     const { id } = req.params;
  //     await User.dropUser(id);
  //     res.status(200);
  //     res.json({ massage: 'User delete' });
  //   } catch (err) {
  //     next(err);
  //   }
  // }
}

export default new Tickets();
