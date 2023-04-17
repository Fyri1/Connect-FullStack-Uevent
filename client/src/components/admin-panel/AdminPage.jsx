import React from "react";

import Spinner from "../common/Spinner.jsx";
import NavbarElement from "./NavbarElement.jsx";
import DataTable from "./table/DataTable.jsx";
import EventsTable from "./table/events-table/EventsTable.jsx";

import { useUsers } from "../../../hooks/user/useUsers.js";
import { useRoles } from "../../../hooks/useRoles.js";
import { useEvents } from "../../../hooks/events/useEvents.js";
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
          <NavbarElement />
          { dataCategory === "events" ? <EventsTable data={displayData[dataCategory].data.values} /> : <DataTable data={displayData[dataCategory].data.values} dataCategory={dataCategory} /> }
        </div>
      }
    </div>
  )
}

export default AdminPage;
