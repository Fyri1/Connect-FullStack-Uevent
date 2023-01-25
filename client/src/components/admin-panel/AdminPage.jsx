import React from "react";

import Spinner from "../common/Spinner.jsx";
import NavbarElement from "./NavbarElement.jsx";
import DataTable from "./table/DataTable.jsx";

import apiAdminRoutes from "../../routes/api/apiAdminRoutes.js";
import axios from "axios";

const AdminPage = ({ dataCategory }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  const onLoad = async () => {
    try {
      console.log('sasi zagryzka: ' + isLoading);
      
      let response;
      switch (dataCategory) {
        case "users":
          response = await axios.get(apiAdminRoutes.usersGetPath());
          break;

        case "roles":
          response = await axios.get(apiAdminRoutes.rolesGetPath());
          break;

        case "events":
          response = await axios.get(apiAdminRoutes.eventsGetPath());
          break;

        case "categories":
          response = await axios.get(apiAdminRoutes.categoriesGetPath());
          break;

        case "tickets":
          response = await axios.get(apiAdminRoutes.ticketsGetPath());
          break;
      
        default:
          response = await axios.get(apiAdminRoutes.usersGetPath());
          break;
      }
      
      // console.log(response);
      
      setData(response.data.users);
      setIsLoading(false);
    } catch (error) {
      console.log('error pizdec! ' + error);
    }
  }

  React.useState(() => {
    onLoad();
  }, []);

  return (
    <div>
      {
        isLoading
        ?
        <Spinner />
        :
        <div>
          <h1>Welcome to Admin control panel</h1>
          <NavbarElement />
          <DataTable data={data} />
        </div>
      }
    </div>
  )
}

export default AdminPage;
