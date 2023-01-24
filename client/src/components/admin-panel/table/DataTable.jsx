import React from "react";

import TableHead from "./TableHead.jsx";
import TableRows from "./TableRow.jsx";

const DataTable = ({ data }) => {
  return (
    <table className="table table-responsive-xl table-bordered table-striped table-hover">
      <TableHead data={data}/>
      <tbody>
        <TableRows data={data}/>
      </tbody>
    </table>
  )
}

export default DataTable;
