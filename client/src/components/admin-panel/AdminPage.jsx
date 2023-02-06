import React from "react";

import Spinner from "../common/Spinner.jsx";
import NavbarElement from "./NavbarElement.jsx";
import DataTable from "./table/DataTable.jsx";

import { useUsers } from "../../../hooks/useUsers.js";
import { useRoles } from "../../../hooks/useRoles.js";
import { useEvents } from "../../../hooks/useEvents.js";
import { useCategories } from "../../../hooks/useCategories.js";
import { useTickets } from "../../../hooks/useTickets.js";
import { useOrganization } from "../../../hooks/useOrganization.js";

const AdminPage = ({ dataCategory }) => {
  const dataHook = {
    users: useUsers,
    roles: useRoles,
    events: useEvents,
    categories: useCategories,
    tickets: useTickets,
    organizations: useOrganization,
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
          <h1>Welcome to Admin control panel СЛАВА УКРАИНЕ</h1>
          <NavbarElement />
          <DataTable data={displayData[dataCategory].data.values} dataCategory={dataCategory} />
        </div>
      }
    </div>
  )
}

export default AdminPage;
