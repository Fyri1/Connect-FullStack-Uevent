import React from "react";


const TableRows = ({ data }) => {
  
  const rowsElements = data.map((dataElement, i) => {
    const keys = Object.keys(dataElement);
    const dataElementValues = [];
    dataElementValues.push(
      <td key={-1} className="w-4 p-4">
        <div className="flex items-center">
          <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
          <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
        </div>
      </td>
    );

    dataElementValues.push(keys.map((key, i) => {
      if (key === 'active') {
        if (dataElement[key]) {
          return <td key={i} className="px-6 py-4">active</td>;
        } else {
          return <td key={i} className="px-6 py-4">inactive</td>
        }
      } else if (dataElement[key]) {
        if (dataElement[key].length < 15) {
          return <td key={i} className="px-6 py-4">{dataElement[key]}</td>
        } else {
          return <td key={i} className="px-6 py-4">{dataElement[key].slice(0, 8) + "..."}</td>
        }
      } else {
        return <td key={i} className="px-6 py-4">null</td>
      }
    }));

    dataElementValues.push(
      <td key={dataElementValues.length}>
        <a className="fas fa-edit fa-2x icon-green" href="#"></a>
        <a className="fas fa-trash fa-2x icon-red" href="#"></a>
      </td>
    );
    
    const rowClickHandle = () => {
      console.log(dataElement);
    }

    return (
      <tr onClick={rowClickHandle} key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">{dataElementValues}</tr>
    );
  })

  return rowsElements;
}

export default TableRows;
