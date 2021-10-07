import { useState } from 'react';

const ActionHandles = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [rulesOpen, setRulesOpen] = useState(false);
  const [status, setStatus] = useState('None');
  const [color, setColor] = useState('#000');

  const handleClickEvent = (e) => {

    let button = e.target.closest('button');
    let type = button.getAttribute('data-type');
    let wrapper = e.target.closest('.js-editor-line');
    let wrapperChild = wrapper.querySelector(':last-child');

    if (type === 'NA') {
      let nextWrapper = wrapper.nextSibling;


      let child = nextWrapper ? nextWrapper.querySelector(':last-child') : null;

      if (!wrapper.classList.contains('na')) {
        wrapper.classList.add('na');
      } else {
        wrapper.classList.remove('na');
      }

      if (nextWrapper) {
        console.log(child.tagName === wrapperChild.tagName, child.className.includes('list--child'));

        // (wrapper.classList.contains('na') && (child && child.tagName === wrapperChild.tagName) && child.className.includes('list--child'))
        while ((child && child.tagName !== wrapperChild.tagName)) {
          if (nextWrapper) {
            if ((wrapper.classList.contains('na') && child.tagName !== wrapperChild.tagName)) {
              nextWrapper.classList.add('collapse')
            } else {
              nextWrapper.classList.remove('collapse')
            }

            nextWrapper = nextWrapper.nextSibling;
            child = nextWrapper ? nextWrapper.querySelector(':last-child') : null;
          }
        }
      }
    }

    if (type === 'Rules') {
      setRulesOpen(!rulesOpen);
    }
  }

  const setComponentStatus = (e) => {

    const eventStatus = e.target.closest('button').getAttribute('data-status');

    setStatus(eventStatus);

    switch (eventStatus) {
      case 'None':
        setColor('#000')
        break;
      case 'In Progress':
        setColor('#FF8A00')
        break;
      case 'Testing':
        setColor('#0092FC')
        break;
      case 'Complete':
        setColor('#84D600')
        break;
      default:
        setColor('#000')
    }

    setIsOpen(!isOpen);

  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>

      <div className={`status status-- ${ status !== 'None' ? '--active' : ''}`}>
        <span className="status__i" style={{ background: color }}></span>
      </div>

      <div className="actions actions--handles actions--left">
        <button type="button" data-type="NA" aria-label="Toggle Not Applicable" onClick={handleClickEvent}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"/></svg>
        </button>
        <div className={`dropdown dropdown--progress ${ isOpen ? "--open" : ''}`}>
          <button className="dropdown__toggle" type="button" aria-label="Status Menu" onClick={toggleDropdown}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill={color}><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
          </button>
          <div className="dropdown__menu">
            <button type="button" data-status="None" onClick={setComponentStatus}>
              <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
              <span>None</span>
            </button>
            <button type="button" data-status="In Progress" onClick={setComponentStatus}>
              <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18" fill="#FF8A00"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
              <span>In Progress</span>
            </button>
            <button type="button" data-status="Testing" onClick={setComponentStatus}>
              <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18" fill="#0092FC"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
              <span>Testing</span>
            </button>
            <button type="button" data-status="Complete" onClick={setComponentStatus}>
              <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18" fill="#84D600"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
              <span>Complete</span>
            </button>
          </div>
        </div>

        <button type="button" aria-label="Drag" onClick={handleClickEvent}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </button>
      </div>

      <div className="actions actions--handles actions--right">
        <button type="button" aria-label="Add Comment" onClick={handleClickEvent}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
        </button>
        <button type="button" aria-label="Create Rule" data-type="Rules" onClick={handleClickEvent}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zm0 17.96c-4.4 0-7.98-3.58-7.98-7.98S7.6 4.02 12 4.02 19.98 7.6 19.98 12 16.4 19.98 12 19.98zM12.75 5l-4.5 8.5h3.14V19l4.36-8.5h-3z"/></svg>
        </button>

        <div className={`popout popout--rules${ rulesOpen ? ' --open' : ''}`} onMouseLeave={() => setRulesOpen(false)}>
          <button type="button">
            <span>i</span>
            <div>
              <h4>Create Rule</h4>
              <p>Create rule from scratch.</p>
            </div>
          </button>
          <button type="button">
            <span>i</span>
            <div>
              <h4>Import Existing Rule</h4>
              <p>Import a rule from an existing rule.</p>
            </div>
          </button>
          <button type="button">
            <span>i</span>
            <div>
              <h4>Import Strategy</h4>
              <p>Import an entire a strategy of rules</p>
            </div>
          </button>
          <button type="button">
            <span>i</span>
            <div>
              <h4>Associate Rule</h4>
              <p>Define a rule that has already been applied.</p>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default ActionHandles;
