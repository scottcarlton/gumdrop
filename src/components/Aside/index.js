import './styles.scss';

import data from '../../assets/api/data';

const AsideItem = ({ item }) => {

  const classes = item.type.node !== 'H2' && item.type.node !== 'B' ? 'entry__link' : 'entry__link entry--level2'
  return (
    <li className="entry" data-id={item['@id']}>
      <a className={classes} href="/#">{item.text}</a>
    </li>
  )
}
const Aside = () => {

  const renderItem = (item) => {
    if (item.type.title || item.type.subtitle) {
      return <AsideItem item={item} key={item['@id']}/>
    } else {
      switch(item.type.node) {
        case 'H1':
        case 'H2':
        case 'B':
          return <AsideItem item={item} key={item['@id']}/>
        default:
          return;
      }
    }

  }

  return (
    <div className="aside">
      <ul className="entries">
        { data.content.map(item => renderItem(item))}
      </ul>
    </div>
  )
}

export default Aside;
