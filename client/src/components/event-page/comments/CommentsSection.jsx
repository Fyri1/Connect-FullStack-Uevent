import React from 'react';
import Comment from './Comment.jsx';
import { useEventComments } from '../../../../hooks/events/useEventComments.js'
import Spinner from '../../common/Spinner';
import { EventService } from '../../../../services/events.service';
import { useMutation } from 'react-query';

const CommentsSection = ({ eventId }) => {
  const isLogin = localStorage.getItem('token');
  const response = useEventComments(eventId);
  const [errors, setErrors] = React.useState({});
  const [content, setContent] = React.useState('');
  const [comments, setComments] = React.useState([]);
  const { isLoading, mutateAsync } = useMutation('change info user', (data) => EventService.createComment(data), 
  {
    onSuccess: ({ data: { values } }) => {
      setComments([values.commentInfo, ...comments ]);
      setContent('');
    },
    onError: (err) => {
      setErrors({
        ...errors,
        ...err.response.data.errors.errors.reduce((acc, i) => {
          return {
            ...acc,
            [i.param]: i.msg,
          };
        }, {})
      })
    }
  }
);
console.log(comments)

  const hendelSubmit = async (e) => {
    e.preventDefault();
    await mutateAsync({ eventId, content });
  }

  return response.isLoading ? <Spinner /> : (
    <div > {/* отвечает за цвет*/}
      <div className="">
        <div className="h-80 px-7 w-full rounded-[12px] bg-white p-4 shadow-md border relative">
          <p className="text-xl font-semibold text-blue-900 cursor-pointer transition-all hover:text-black">Add Comment</p>
          {!isLogin ? <> <p className="text-2xl absolute left-1/4 top-1/2">You must be logged in or registered to leave comments!</p> </> : 
             <form onSubmit={hendelSubmit}>
                <textarea onChange={(e) => setContent(e.target.value)} value={content} className="h-40 px-3 text-sm py-1 mt-5 outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm" placeholder="Add your comments here"></textarea>
                <div className="flex justify-between mt-2"> 
                  <p className="text-sm text-blue-900 ">Enter atleast 5 characters</p>
                  <button  disabled={isLoading} className="h-12 w-[150px] bg-blue-600 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-blue-500">Submit comment</button>
                </div>   
              </form>
          }
        </div>   
      </div>
      {
        comments.length === 0 ? <></> : 
        comments.map(comment => <Comment data={comment}/>)
      }
      {
        response.comments.length === 0 ? <></> : 
        response.comments.map(comment => <Comment data={comment}/>)
      }
    </div>
  )
}

export default CommentsSection;
