import PayService from '../services/pay.service.js'
import TokenService from '../services/token-service.js';

class Pay {
  async createSessionIntent(req, _res) {
    const { item, key } = req.body;
    const token = req.headers.authorization?.split(' ')[1];
    TokenService.validateAccessToken(token);
    const data = await PayService.createSessionIntent(item, key);
    return data;
  }

  async createSessionRetrive(req, _res) {
    const { sessionId, eventId } = req.body;
    const token = req.headers.authorization?.split(' ')[1];
    const { id: userId } = TokenService.validateAccessToken(token);
    const result = await PayService.createSessionRetrive(userId, eventId, sessionId);
    return result;
  }

  async createRefundsPayment(req, _res) {
    const { id } = req.body;
    const token = req.headers.authorization?.split(' ')[1];
    const { id: userId } = TokenService.validateAccessToken(token);
    const data = await PayService.createRefaundPayment(id, userId);
    return data;
  }
}

export default new Pay();
