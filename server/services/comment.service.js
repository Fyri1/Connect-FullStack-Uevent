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
    const { author_id } = await Comment.findCommentId(id);
    if (author_id !== userId) {
      next(ApiError.AccessDenied('Access denied, your ne tot User'));
    }
    return await Comment.updateComment(id, content);
  }
  async deleteComment({ params: { id } }, userId) {
    const { author_id } = await Comment.findCommentId(id);
    if (author_id !== userId) {
      next(ApiError.AccessDenied('Access denied, your ne tot User'));
    }
    return await Comment.deleteComment(id);
  }
}

export default new CommentService();
