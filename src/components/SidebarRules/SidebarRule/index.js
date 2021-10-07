import rules from '../../../assets/api/rules';

const SidebarRule = ({ id }) => {

  const rule = rules.filter(rule => rule['@id'] === id)[0];

  return (
    <div>
      <span>•</span>
      {rule.title}
    </div>
  )
}

export default SidebarRule;
