import EditorPocket from './EditorPocket';

const BoldLine = ({ data }) => {

  const {text} = {...data}

    return (
      <>
        <EditorPocket />
        <span><b>{ text }</b></span>
      </>
    )

}

export default BoldLine;
