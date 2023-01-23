import React from "react";

import adminRoutes from "../../routes/client/adminRoutes.js";

const DataTable = ({ data }) => {

  const tableRows = data.map((element, i) => {
    return (
      <tr key={i}>
        <td>{element.id}</td>
        <td>{element.login}</td>
        <td>{element.email}</td>
        <td>{element.first_name}</td>
        <td>{element.second_name}</td>
        <td>{element.last_name}</td>
        <td>{element.phone_number}</td>
        <td>{element.company}</td>
        <td>
          {
            element.active
            ?
            <a className="fa-check-circle fa-2x icon-green"></a>
            :
            <a className="fa-check-circle fa-2x icon-red"></a>
          }
        </td>
        <td>{element.created_at}</td>
        <td>
          <a className="fas fa-edit fa-2x icon-green" href="#"></a>
          <a className="fas fa-trash fa-2x icon-red" href="#"></a>
        </td>
      </tr>
    )
  })

  return (
    <table className="table table-responsive-xl table-bordered table-striped table-hover">
      <thead className="thead-dark">
        <tr>
          <th>User ID</th>
          <th>Login</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Second Name</th>
          <th>Last Name</th>
          <th>Phone number</th>
          <th>Company</th>
          <th>Roles</th>
          <th>Active</th>
          <th>Created at</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        { tableRows }
      </tbody>
    </table>
  )
}

export default DataTable;
