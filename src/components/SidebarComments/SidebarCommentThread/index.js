import './styles.scss';

import SidebarComment from '../SidebarComment';

const SidebarCommentThread = ({ thread }) => {

  const { top, commentIds } = {...thread}
  return (
    <div className="rule__thread" style={{ left: 0, top: top }}>
      { commentIds.map(id => (
        <SidebarComment id={id} key={`comment-${id}`} />
      )) }
    </div>
  )
}

export default SidebarCommentThread;
