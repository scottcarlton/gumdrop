import '../../assets/styles/sidebars.scss';
import './styles.scss';

import threads from '../../assets/api/threads/rules';

import SidebarRuleThread from './SidebarRuleThread';

const SidebarRules = () => {
  return (
    <div className="sidebar sidebar--page sidebar--rules">
      <div className="sidebar__content">
        { threads.map(thread => <SidebarRuleThread thread={thread} key={`thread-${thread['@id']}`} />)}
      </div>
    </div>
  )
}

export default SidebarRules;
