import { v4 as uuidv4 } from 'uuid';
import Comment from '../models/Comment.js';
import ApiError from '../exceptions/api-error.js';

class CommentService {
  async getAll() {
    return await Comment.getAll();
  }

  async getCommentById({ id }) {
    return await Comment.findCommentId(id);
  }

  async updateCommentData({ params: { id }, body: { content } }, userId) {
    const { user_id } = await Comment.findCommentId(id);
    if (user_id !== userId) {
      throw ApiError.AccessDenied('Access denied, your ne tot User');
    }
    return await Comment.updateComment(id, content);
  }

  async deleteComment({ id }, userId) {
    const { user_id } = await Comment.findCommentId(id);
    if (user_id !== userId) {
      throw ApiError.AccessDenied('Access denied, your ne tot User');
    }
    return await Comment.deleteComment(id);
  }
}

export default new CommentService();
