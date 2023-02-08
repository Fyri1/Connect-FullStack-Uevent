import client from '../client.js';
import ApiError from '../exceptions/api-error.js';

class Comment {
  async findCommentId(id) {
    const comment = await client('comments').select('*').where('id', '=', id);
    if (comment.length === 0) {
      throw ApiError.NotFound('Comment not found');
    }
    return comment[0];
  }
  async getAllCommentPost(id) {
    return await client('comments').select('*').where('post_id', '=', id);
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
      await client('comments').where('id', '=', id).update({ content });
      return 'update comment :)';
    } catch (err) {
      throw err;
    }
  }

  async createComment(user_id, post_id, content) {
    try {
      const publish_date = new Date();
      await client('comments').insert({
        user_id,
        post_id,
        publish_date,
        content,
      });
      const comment_id = await client('comments')
        .select('id')
        .where('publish_date', '=', publish_date);
      await client('event_comments').insert({
        user_id,
        comment_id,
      });
      return 'create comments';
    } catch (err) {
      throw err;
    }
  }
}

export default new Comment();
