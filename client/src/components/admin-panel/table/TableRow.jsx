import React from "react";


const TableRows = ({ data }) => {
  
  const rowsElements = data.map((dataElement, i) => {
    const keys = Object.keys(dataElement);
    const dataElementValues = keys.map((key, i) => {
      if (key === 'active') {
        if (dataElement[key]) {
          // return <a className="fa-check-circle fa-2x icon-green"></a>
          return <td key={i}>active</td>;
        } else {
          // <a className="fa-check-circle fa-2x icon-red"></a>
          return <td key={i}>inactive</td>
        }
      } else {
        return <td key={i}>{dataElement[key]}</td>
      }
    })

    dataElementValues.push(
      <td key={dataElementValues.length}>
        <a className="fas fa-edit fa-2x icon-green" href="#"></a>
        <a className="fas fa-trash fa-2x icon-red" href="#"></a>
      </td>
    );

    return (
      <tr key={i}>{dataElementValues}</tr>
    );
  })

  return rowsElements;
}

export default TableRows;
