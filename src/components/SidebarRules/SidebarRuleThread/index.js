
import './styles.scss';

import SidebarRule from '../SidebarRule';

const SidebarRuleThread = ({ thread }) => {

  const { top, ruleIds } = {...thread}
  return (
    <div className="rule__thread" style={{ left: 0, top: top }}>
      { ruleIds.map(id => (
        <SidebarRule id={id} key={id}/>
      )) }
    </div>
  )
}

export default SidebarRuleThread;
