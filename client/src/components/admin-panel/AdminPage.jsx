import React from "react";

import Spinner from "../common/Spinner.jsx";
import NavbarElement from "./NavbarElement.jsx";
import DataTable from "./table/DataTable.jsx";

import { useUsers } from "../../../hooks/useUsers.js";
import { useEvents } from "../../../hooks/useEvents.js";
import { useTickets } from "../../../hooks/useTickets.js";

const AdminPage = ({ dataCategory }) => {
  const dataHook = {
    users: useUsers,
    events: useEvents,
    tickets: useTickets,
  }
  const displayData = dataHook[dataCategory]();

  return (
    <div>
      {
        displayData.isLoading
        ?
        <Spinner />
        :
        <div>
          <h1>Welcome to Admin control panel</h1>
          <NavbarElement />
          <DataTable data={displayData[dataCategory].data.values} dataCategory={dataCategory} />
        </div>
      }
    </div>
  )
}

export default AdminPage;
