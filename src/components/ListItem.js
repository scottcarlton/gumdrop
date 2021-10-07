//import { useState } from 'react';
//import { useRef } from 'react';
import EditorPocket from './EditorPocket';

const ListItemDefault = ({ text = '' }) => {
  return (
    <span>{text}</span>
  )
}

const ListItemBold = ({ text = '' }) => {
  return (
    <span><b>{text}</b></span>
  )
}
const ListItem = ({ data }) => {

  const {text} = {...data};

  const classes = (data.type.node === 'LI' || data.type.node === 'LI B') ? ['list list--bullet'] : data.type.node === 'LI LI' ? ['list list--bullet list--child'] : ['list list--indent'];

  const renderText = (data) => {
    if (data.type && data.type.node ) {
      switch(data.type.node) {
        case 'LI B':
          return <ListItemBold text={text} />
        case 'LI':
        case 'LI LI':
        default:
          return <ListItemDefault text={text} />
      }
    } else {
      return <ListItemDefault text={''} />;
    }

  }
  return (
    <ul className={classes}>
      <li>
        <EditorPocket actions={true} />
        { renderText(data) }
      </li>
    </ul>
  )
}

export default ListItem;
