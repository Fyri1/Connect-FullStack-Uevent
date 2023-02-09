import client from '../client.js';
import ApiError from '../exceptions/api-error.js';

class Comment {

  async getAll() {
    return await client('comments').select('*');
  }

  async findCommentId(id) {
    const comment = await client('comments').select('*').where('id', '=', id);
    if (comment.length === 0) {
      throw ApiError.NotFound('Comment not found');
    }
    return comment[0];
  }

  async deleteComment(id) {
    try {
      await client('comments').where('id', '=', id).del();
      return 'delete comment :)';
    } catch (err) {
      throw err;
    }
  }
  async updateComment(id, content) {
    try {
      // await client('comments').where('id', '=', id).update({ content });
      return 'update comment :)';
    } catch (err) {
      throw err;
    }
  }

  async createComment(id, event_id, user_id, content) {
    try {
      await client('comments').insert({
        id,
        user_id,
        content,
      });
      const comment_id = await client('comments')
        .select('id')
        .where('id', '=', id);
      await client('event_comments').insert({
        comment_id: comment_id[0].id,
        event_id,
      });
      return 'create comments';
    } catch (err) {
      throw err;
    }
  }
}

export default new Comment();
