import { useState } from "react";
import Avatar from "../../components/Avatar";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default function ProjectComments({ project }) {
  const { user } = useAuthContext();
  const { updateDocument, response } = useFirestore('projects');
  const [newComment, setNewComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random()
    };
    
    await updateDocument(project.id, {
      comments: [...project.comments, commentToAdd],
    });
    if (!response.error) {
      setNewComment('');
    }
  };

  const handleDelete = async (commentId) => {
    await updateDocument(project.id, {
      comments: project.comments.filter((comment) => comment.id !== commentId),
    });
  };

  return (
    <div className="project-comments">
      <h4>Project Comments</h4>
      <div className="comments-scrollable">
        <ul>
          {project.comments.length > 0 && project.comments.map(comment => (
            <li key={comment.id}>
              <div className="comment-wrapper">
                <div className="comment-header">
                  <Avatar src={comment.photoURL} />
                  <p>{comment.displayName}</p>
                </div>
                <div className="comment-content">
                  <p>{comment.content}</p>
                </div>
                <div className="comment-info">
                  <p>{formatDistanceToNow(comment.createdAt.toDate(), { addSuffix: true })}</p>
                  {comment.displayName === user.displayName && (
                    <button className="delete-button" onClick={() => handleDelete(comment.id)}>
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add new comment:</span>
          <textarea
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
        </label>
        <button className="btn">Add Comment</button>
      </form>
    </div>
  );
}
