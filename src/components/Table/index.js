//import { useState } from 'react';
//import { useRef } from 'react';
//import EditorPocket from './EditorPocket';
import './styles.scss';

const TD = ({ data }) => {

  return (
     <td rowSpan={data.styles.rowspan} colSpan={data.styles.colspan} data-id={data['@id']}>
       <div className="cell">
        { data.text }
       </div>

      </td>
  )
}

const TR = ({ row }) => {
  return (
    <tr data-id={row['@id']}>
      {row.data.map(column => <TD data={column} key={column['@id']} />) }
    </tr>
  )
}
const Table = ({ table }) => {
  return (
    <table data-id={table['@id']}>
      <tbody>
        { table.data.map(row => <TR row={row} key={row['@id']} /> )}
      </tbody>
    </table>
  )
}

export default Table;
