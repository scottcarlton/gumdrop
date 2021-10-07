//import { useState } from 'react';
//import { useRef } from 'react';
import './styles.scss';

import Headline from '../../Headline';
import DefaultContent from '../../DefaultContent';
import ListItem from '../../ListItem';
import BoldLine from '../../BoldLine';
import Table from '../../Table';

const EditorLine = ({ data = { id: null, text: '', type: { title: false, subtitle: false }}}) => {

  const renderElement = (data) => {
    switch (data.type.node) {
      case 'H1':
      case 'H2':
        return <Headline data={data} />
      case 'LI':
      case 'LI B':
      case 'LI LI':
      case 'LI TAB':
        return <ListItem data={data} />
      case 'B':
        return <BoldLine data={data} />
      case 'TABLE':
        return <Table table={data} />
      default:
        return <DefaultContent data={data} />
    }
  }

  if (data.type.title) {
    return (
      <div className="js-editor-line editorline" data-title data-id={data['@id']} aria-level="1" role="heading">
        <DefaultContent data={data} />
      </div>
    )
  } else if (data.type.subtitle) {
    return (
      <div className="js-editor-line editorline" data-subtitle data-id={data['@id']}>
        { renderElement(data) }
      </div>
    )
  } else {
    return (
      <div className="js-editor-line editorline" data-id={data['@id']}>
        { renderElement(data) }
      </div>
    )
  }
}

export default EditorLine;
