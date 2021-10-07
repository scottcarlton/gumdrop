
import ActionHandles from './ActionHandles';

const EditorPocket = ({ actions = false}) => {
  return (
    <>
      <span data-faketext data-contentcollector-ignore-space-at="end">&#8203;</span>
      {/* <span className="editor__line--pocket" contentEditable={false}>
          { !actions ? '' : <ActionHandles /> }
      </span> */}
      <span data-faketext data-contentcollector-ignore-space-at="start">&#8203;</span>
    </>
  )
}

export default EditorPocket;
