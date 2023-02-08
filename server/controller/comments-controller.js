import Comment from '../services/comment.service.js';
import ApiError from '../exceptions/api-error.js';
import TokenService from '../service/token-service.js';

class Сomments {
  async getCommentById(req, _res) {
    return await Comment.getCommentById(req.params);
  }
  async updateCommentData(req, _res) {
    const token = req.headers.authorization.split(' ')[1];
    const { id } = TokenService.validateAccessToken(token);
    return await Comment.getCommentById(req, id);
  }
  async deleteComment(req, _res) {
    return await Comment.getCommentById(req.params);
  }
}

export default new Сomments();
