import React from "react";

import InputElement from './InputElement.jsx';


const TableHead = ({ data }) => {
  const keys = Object.keys(data[0]);

  const headColumnNameElements = keys.map((key, i) => {
    return (
      <th key={i}>{key}</th>
    );
  });

  const headSearchInputElements = keys.map((key, i) => {
    if (typeof data[0][key] === 'string' || data[0][key] === null) {
      return ( <th key={i}><InputElement /></th> )
    } else {
      return ( <th key={i}></th> );
    }
  });

  return (
    <thead className="thead-dark">
      <tr>
        { headSearchInputElements }
        <th></th>
      </tr>
      <tr>
        { headColumnNameElements }
        <th>Actions</th>
      </tr>
    </thead>
  )
}

export default TableHead;
