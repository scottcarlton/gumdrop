
import '../../assets/styles/sidebars.scss';

import SidebarCommentThread from './SidebarCommentThread';

import threads from '../../assets/api/threads/comments';

const SidebarComments = () => {
  return (
    <div className="sidebar sidebar--page sidebar--comments">
      <div className="sidebar__content">
        { threads.map(thread => <SidebarCommentThread thread={thread} key={`thread-${thread['@id']}`} />)}
      </div>
    </div>
  )
}

export default SidebarComments;
