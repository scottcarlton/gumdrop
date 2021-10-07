
import './styles.scss';

import { useEffect, useRef, useState } from 'react';

import Paper from '../Paper';
import EditorLine from './EditorLine';
//import jsonData from '../../assets/api/data';

const uuid = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(c) {
    return ((c ^ window.crypto.getRandomValues(new Uint8Array(1))[0]) & (15 >> c / 4)).toString(16)
  })
}

const Editor = () => {

  const [data, setData] = useState({ title: '', content: [
    {
      "@id": uuid(),
      "text": "",
      "type": {
        "title": true,
        "subtitle": false,
        "node": null
      }
    },
    {
      "@id": uuid(),
      "text": "",
      "type": {
        "title": false,
        "subtitle": true,
        "node": "B"
      }
    },
  ]});

  const editor = useRef();

  useEffect(() => {

    //setData(jsonData);

    // if (editor) {
    //   console.log('this.editor', editor);
    // }
  }, [data, setData]);

  const getParsedData = (e) => {

    if (!/text\/html/.test(JSON.stringify(e.types))) {
      return !1;
    }

    const parser = new DOMParser();

    //console.log(parser.parseFromString(e.getData('text/html'), 'text/html'));

    const htmlData = parser.parseFromString(e.getData('text/html'), 'text/html').body;

    return htmlData;
  }

  const normalizeString = (content) => {
    return content.trim().replace(/[\n\r]+/g, ' ').replace(/\s\s+/g, ' ');
  }


  const isHeaderData = (element) => {
    return element.tagName === 'H1' || element.tagName === 'H2';
  }

  const isListItems = (element) => {
    return element.tagName === 'UL' || element.tagName === 'OL';
  }

  const isLevelOneFauxListItem = (element) => {
    return element.textContent.charAt(0) === '•' && element.textContent.charAt(1) === ' ';
  }

  const isLevelTwoFauxListItem = (element) => {
    return element.textContent.charAt(0) === 'o' && element.textContent.charAt(1) === ' ';
  }

  const isListItem = (element) => {
    return element.tagName === 'LI' || isLevelOneFauxListItem(element) || isLevelTwoFauxListItem(element);
  }

  const isFauxListItem = (element) => {
    return isLevelOneFauxListItem(element) || isLevelTwoFauxListItem(element);
  }


  const isParagraphData = (element) => {
    return element.tagName === 'P' && !isFauxListItem(element);
  }

  const isTableData = (element) => {
    return element.tagName === 'TABLE';
  }

  // const findChildren = (element) => {
  //   const children = element.childNodes;
  //   let allChildren = []
  //   // /\S/.test(element.textContent)
  //   if (!children.length) {
  //     console.log('****', element);
  //     return element;
  //   }

  //   children.forEach(item => {
  //     if (/\S/.test(item.textContent)) {
  //       allChildren.push(item);
  //       console.log('---child', item);
  //     }
  //   });

  //   return allChildren;
  // }

  const parseHeader = (element, tagName = element.tagName) => {

    //tagName = isHeaderData(element) ? element.tagName : tagName;
    // let isTitle = false;
    // if (!title) {
    //   title = element
    //   isTitle = true

    // }

    return {
      '@id': uuid(),
      text: element.textContent.trim(),
      type: {
        title: false,
        subtitle: false,
        node: tagName
      }
    }
  }

  const parseParagraph = (element) => {

    let dataObject = {
      'id': uuid(),
      text: '',
      type: {
        title: false,
        subtitle: false,
        node: 'P'
      }
    };

    // If there is only one node
    if (element.childNodes.length <= 1) {

      // If that child has styling
      let size = parseInt(element.childNodes[0].style.fontSize.substring(0, 2));
      const measure = element.childNodes[0].style.fontSize.slice(-2);

      // If size is in pt instead of px
      if (measure === 'pt') {
        size = size / .75;
      }

      if (size >= 21 && size < 30) { // Assume that it's an H2 tag
        dataObject = parseHeader(element, 'H2');
      } else if (size >= 30) { // Assume that it's an H1 tag
        dataObject = parseHeader(element, 'H1');
      } else  {

        const bold = element.childNodes[0].style.fontWeight >= 600 || element.tagName === 'B';

        dataObject = {
          '@id': uuid(),
          text: element.textContent.trim(),
          type: {
            title: false,
            subtitle: false,
            node: !bold ? 'P' : 'B'
          }
        }
      }
    } else {

      dataObject = {
        '@id': uuid(),
        text: element.textContent.trim(),
        type: {
          title: false,
          subtitle: false,
          node: 'P'
        }
      }
      // Otherwise Look at all the children
      //findChildren(element);
    }

    return dataObject;
  }

  const parseListItem = (parent, item, object) => {

    //let string = '';
    item.childNodes.forEach((child, i) => {
      if (/\S/.test(child.textContent)) {
        //const whitespace = /\s$/;

        if (child.tagName === 'P') {
          //if (whitespace.test(child.textContent)) {
          //   console.log('LI END', normalizeString(item.textContent));
          // }
          if (!isFauxListItem(child)) {

            //console.log('LI', i, child.childNodes, child.textContent);
            object.content.push({
              '@id': uuid(),
              text: child.textContent.trim(),
              type: {
                title: false,
                subtitle: false,
                node: 'LI'
              }
            })
          } else {
            object.content.push({
              '@id': uuid(),
              text: !isFauxListItem(child) ? child.textContent.trim() : child.textContent.substring(1).trim(),
              type: {
                title: false,
                subtitle: false,
                node: 'LI LI'
              }
            })
          }
        } else {
          if (!isListItems(child)) {
            //console.log('LI Child', i, child.tagName, child)
          } else {
            //console.log('List List', i, child.tagName, child)
          }

        }

      }
    })

  }

  const parseListItems = (element, object) => {

    if (isListItems(element)) {
      element.childNodes.forEach(item => {
        if (/\S/.test(item.textContent)) {
          parseListItem(element, item, object);
        }
      })
    } else {
      //console.log('Faux LI', element);

      object.content.push({
        'id': uuid(),
        text: !isFauxListItem(element) ? element.textContent.trim() : element.textContent.substring(1).trim(),
        type: {
          title: false,
          subtitle: false,
          node: isLevelOneFauxListItem(element) ? 'LI' : 'LI LI'
        }
      });
    }


  }

  const parseTable = (element, object) => {
    console.log(element.tagName, element);
    const rows = element.querySelectorAll('tr');
    const tableData = {
      '@id': uuid(),
      data: [],
      type: {
        title: false,
        subtitle: false,
        node: 'TABLE'
      }
    }
    rows.forEach((row) => {
      //console.log('row', row);

      const rowData = { '@id': uuid(), data: [] }


      let columns = row.querySelectorAll('td');

      columns.forEach((column) => {

        if (/\S/.test(column.textContent)) {
          //console.log('column', normalizeString(column.textContent));
          rowData.data.push({
            '@id': uuid(),
            text: normalizeString(column.textContent),
            styles: {
              rowspan: column.getAttribute('rowspan'),
              colspan: column.getAttribute('colspan'),

            }

          })
        }

      })

      tableData.data.push(rowData);

    })

    object.content.push(tableData);
    //console.log('tableData', tableData);
  }

  const findNodes = (element, object) => {

    const children = element.childNodes;

    if (!children.length) {
      //console.log('ONLY ELEMENT:', element);
      return element;
    } else {
      children.forEach(child => {
        if (/\S/.test(child.textContent)) {
          if (isHeaderData(child) || isParagraphData(child) || isTableData(child) || isListItems(child) || isFauxListItem(child) || isListItem(element)) {
            if (isHeaderData(child)) {
              const headerData = parseHeader(child);

              object.content.push(headerData);
            } else if (isParagraphData(child)) {
              const paragraphData = parseParagraph(child);
              object.content.push(paragraphData);

            } else if (isListItems(child)) {
              //console.log('Parse List');
              parseListItems(child, object);
            } else if (isListItem(child)) {
              //parseListItem(child);
            } else if (isTableData(child)) {
              parseTable(child, object);
            }
          } else {
            //console.log('child', child);
            findNodes(child, object);
          }
        }
        // if (/\S/.test(child.textContent)) {
        //   if (isHeaderData(child) || isParagraphData(child) || isTableData(child) || isListItems(child) || isFauxListItem(child)) {
        //     if (isHeaderData(child)) {
        //       parseHeader(child);
        //     } else if (isParagraphData(child)) {
        //       parseParagraph(child);
        //     } else if  (isListItems(child) || isFauxListItem(child)) {
        //       parseListItems(child);
        //     } else if (isTableData(child)) {
        //       parseTable(child);
        //     }
        //   } else {
        //     console.log('--child', child);
        //     findNodes(child);
        //   }
        // }
      })
    }
  }

  const handlePasteEvent = (e) => {

    e.preventDefault();

    let clipboardData = e.clipboardData;

    const object = {
      title: '',
      content: []
    }

    const parsedData = getParsedData(clipboardData);

    const elements = parsedData.childNodes;

    elements.forEach(element => {
      findNodes(element, object);
    });

    object['id'] = uuid();
    object.title = 'My Pasted Content';

    //console.log(object);
    setData(object);
  }

  const handleChange = (e) => {
    console.log('Handle Changes', editor, e);
  }

  console.log(data);
  return (
    <Paper>
      <div className="paper__editor">
        <div className="editor__wrapper">
          <div className="editor__viewport">
            <div className="editor" contentEditable suppressContentEditableWarning ref={editor} onKeyDown={handleChange} onPaste={handlePasteEvent}>
              { data.content.map(item => <EditorLine data={item} key={item['@id'] }/>) }
            </div>
          </div>
        </div>

      </div>
    </Paper>
  )
}

export default Editor;
