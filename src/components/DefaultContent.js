//import { useState } from 'react';
//import { useRef } from 'react';

import EditorPocket from './EditorPocket';

const DefaultContent = ({ data }) => {

  const {text} = {...data};

  return (
    <>
      <EditorPocket />
      { text && text.length ? <span>{ text }</span> : <br />}
    </>
  )
}

export default DefaultContent;
