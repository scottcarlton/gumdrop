import EditorPocket from './EditorPocket';

const Headline = ({ data }) => {

  const {type, text} = {...data}

  if (type.node === 'H1') {
    return (
      <h1>
        <EditorPocket actions={true} />
        <span>{text}</span>
      </h1>
    )
  } else {
    return (
      <h2>
        <EditorPocket actions={true}/>
        <span>{text}</span>
      </h2>
    )
  }

}

export default Headline;
