
import './assets/styles/App.scss';

import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Container from './components/Container';
import Page from './components/Page';
import EditorContent from './components/EditorContent';
import SidebarComments from './components/SidebarComments';
import SidebarRules from './components/SidebarRules';
import SidebarMenu from './components/SidebarMenu';

import Aside from './components/Aside';
import BottomToolbar from './components/BottomToolbar';

import Footer from './components/Footer';

//import EditorLine from './components/EditorLine';
//import EditorPocket from './components/EditorPocket';

//let focusedNode = null;

function App() {

  // const handleKeyUpEvent = (e) => {

  //   const editorTitle = document.querySelector('[data-title]');
  //   const editorSubtitle = document.querySelector('[data-subtitle]');

  //   // if (focusedNode && !focusedNode.textContent.length && e.keyCode === 8) {
  //   //   console.log('backspace');
  //   //   e.preventDefault();
  //   // }
  //   console.log(editorSubtitle)
  //   if (editorTitle.textContent.length < 3) {
  //     e.target.classList.add('editor--notitle')
  //   } else {
  //     e.target.classList.remove('editor--notitle')
  //   }

  //   if (editorSubtitle.textContent.length <= 2) {
  //     e.target.classList.add('editor--nosubtitle');
  //   } else {
  //     e.target.classList.remove('editor--nosubtitle');
  //   }
  // }

  // const handleKeyDownEvent = (e) => {

  //   //const editorTitle = document.querySelector('[data-title]');
  //   //const editorSubtitle = document.querySelector('[data-subtitle]');

  //   //console.log('Event', e)

  //   // if (editorTitle.textContent.length <= 2 && e.keyCode === 8) {
  //   //   //editorTitle.focus();
  //   //   e.preventDefault();
  //   // }

  //   // if (editorSubtitle.textContent.length <= 2 && e.keyCode === 8) {
  //   //   //editorTitle.focus();
  //   //   e.preventDefault();
  //   // }

  //   if (e.keyCode === 13) {
  //     e.preventDefault();

  //     // const div = document.createElement('div');

  //     // div.innerHTML = `<span>1</span><span>2</span><span>3</span>`

  //     // focusedNode.after(div);
  //     //e.target.blur();
  //     //editorSubtitle.focus();
  //   }
  // }

  // const handleClickEvent = (e) => {

  //   const previousFocus = document.querySelector('.focus--line');
  //   const parent = e.target.closest('.js-editor-line');

  //   focusedNode = parent;

  //   if (previousFocus) {
  //     previousFocus.classList.remove('focus--line');
  //   }

  //   if (parent) {
  //     parent.classList.add('focus--line')
  //   }
  // }

  return (
    <div>
      <Wrapper>
        <Header />
        <Container>
          <Page>
            <EditorContent />
            <SidebarComments />
            <SidebarRules />
          </Page>
          <SidebarMenu />
        </Container>
        <Aside />
      </Wrapper>
      <BottomToolbar />
      <Footer />
      {/* <div className="paper paper--wrapper">
        <div className="editor__viewport">
          <div className="editor__content">
            <div className="editor" id="js-editor" contentEditable suppressContentEditableWarning onKeyUp={handleKeyUpEvent} onKeyDown={handleKeyDownEvent} onClick={handleClickEvent}>

              <EditorLine data={{ content: 'Jumbo Program Guide'}} title={true}/>

              <EditorLine data={{ type: 'b', content: 'Version 25'}} subtitle={true} />

              <EditorLine />

              <EditorLine data={{ type: 'b', content: 'August 30, 2021'}} />

              <EditorLine data={{ type: 'b', content: '(Effective for locks taken out on or after September 3, 2021)'}} />

              <EditorLine data={{ type: 'h1', content: '1.0 Fair Lending Statement'}} />

              <EditorLine data={{ type: null, content: 'Federal law prohibits discrimination in connection with the origination of 1-4 family mortgage loans.  The Equal Credit Opportunity Act prohibits creditors from discriminating against credit applicants on the basis of race, color, religion, national origin, sex, marital status, age, because an applicant receives income from a public assistance program, or because an applicant has in good faith exercised any right under the Consumer Credit Protection Act.  Also, the Fair Housing Act prohibits discrimination in the sale, rental, and financing of dwellings, and in other housing-related transactions, based on race, color, national origin, religion, sex, familial status (including children under the age of 18 living with parents or legal custodians, pregnant women, and people securing custody of children under the age of 18), and disability.  It is the responsibility of all buyers and sellers to ensure that they adhere to these laws and their underlying principles in connection with mortgage loans purchased and sold to MAXEX.'}} />

              <EditorLine data={{ type: 'h1', content: '2.0 Underwriting Philosophy'}} />

              <EditorLine data={{ type: 'p', content: 'All loans must be prudently underwritten utilizing the MAXEX program guidelines and industry standard best practices. All loans must be manually underwritten and fully documented.'}} />

              <EditorLine />

              <EditorLine data={{ type: 'p', content: 'Seller must ensure that each loan delivered to MAXEX is in compliance with the Ability to Repay (ATR) and the Qualified Mortgage (QM) rules established by the Consumer Financial Bureau (“CFPB”) if applicable as well as all regulatory compliance regulations as outlined in Section 4.0.'}} />

              <EditorLine />

              <EditorLine data={{ type: 'p', content: 'All loans submitted to MAXEX for purchase and sale must conform to the Underwriting Guidelines.'}} />

              <EditorLine />

              <EditorLine data={{ type: 'p', content: 'For scenarios not specifically addressed in the following Underwriting Guidelines, please contact your Client Advocate or Underwriting for assistance.'}} />

              <EditorLine data={{ type: 'h1', content: '3.0 Products'}} />

              <EditorLine data={{ type: 'h2', content: '3.1 Products Offered'}} />

              <EditorLine data={{ type: 'p', content: 'This product description describes product guidelines and requirements for the following MAXEX loan programs:'}} />

              <EditorLine />

              <EditorLine data={{ type: 'li', content: 'Fully Amortizing Fixed Rate 15 and 30-year terms'}} />

              <EditorLine data={{ type: 'li', content: 'Fully Amortizing 5yr/6m, 7yr/6m, and 10yr/6m SOFR ARM’s.'}} />

              <EditorLine data={{ type: 'li li', content: '5yr/6m ARM qualified at the higher of the maximum potential Note rate after first adjustment or the fully indexed rate. The fully indexed rate is the sum of the index and the margin.'}} />

              <EditorLine data={{ type: 'li li', content: '7yr/6m and 10yr/6m ARM products must be qualified at the higher of the Note rate or the fully indexed rate.'}} />

              <EditorLine data={{ type: 'li', content: 'No Mortgage Insurance allowed.'}} />

              <EditorLine data={{ type: 'h2', content: '3.2 ARM Parameters'}} />

              <EditorLine data={{ type: 'li', content: '5yr/6m SOFR ARM'}} />

              <EditorLine data={{ type: 'li tab', content: 'The interest rate will be fixed for an initial period of five (5) years (60 payments).  The initial rate change will take place effective as of the sixty-first (61st) payment due date and on that day every 6 months thereafter, using the index figure in effect on the day that is 45 days before the interest rate adjustment date.'}} />
            </div>
          </div>
        </div>

        <div className="toolbar toolbar--bottom">
          <button type="button" aria-label="Add Table">
            <svg viewBox="0 0 24 24" fill="none" width="24" height="24" focusable="false"><path d="M4.5 5.5V18H19.5V5.5H4.5ZM18 11H15.0085L15.014 7H18V11ZM10.5085 11L10.514 7H13.514L13.5085 11H10.5085ZM13.5085 12.5L13.5 16.5H10.5L10.5055 12.5H13.5085ZM9.014 7L9.0085 11H6V7H9.014ZM6 12.5H9.0065L9 16.5H6V12.5ZM15 16.5L15.0055 12.5H18V16.5H15Z" fill="currentColor"></path></svg>
          </button>
          <button type="button" aria-label="Add Bullet List">
            <svg fill="currentColor" height="18" viewBox="0 0 24 24" width="18" focusable="false"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/></svg>
          </button>
          <button type="button" aria-label="Add Bullet List">
            <svg fill="currentColor" height="18" viewBox="0 0 24 24" width="18" focusable="false"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"/></svg>
          </button>
        </div>

      </div> */}
    </div>
  );
}

export default App;
