import React from "react";

import Spinner from "../common/Spinner.jsx";
import NavbarElement from "./NavbarElement.jsx";
import DataTable from "./table/DataTable.jsx";

// import apiAdminRoutes from "../../routes/api/apiAdminRoutes.js";
// import axios from "axios";

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
  console.log(displayData);

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
          <DataTable data={displayData[dataCategory].data.values} />
        </div>
      }
    </div>
  )
}

export default AdminPage;
