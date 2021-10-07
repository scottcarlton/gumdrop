
import './styles.scss';

import Avatar from '../../../components/Avatar';

import comments from '../../../assets/api/comments';

const SidebarComment = ({ id }) => {

  const comment = comments.filter(comment => comment['@id'] === id)[0];
  const content = comment.text;

  const setContent = (content) => content.length > 50 ? `${content.substring(0, 50)}...` : content;

  return (
    <div className="comment">
      <div className="comment__header"></div>
      <div className="comment__wrapper">
        <Avatar name={comment.authorName} />
        <div className="comment__content">
          {/* <span>{ comment.authorName }</span> */}
          <div className="comment__text">{ setContent(content) }</div>
        </div>
      </div>
    </div>
  )
}

export default SidebarComment;
