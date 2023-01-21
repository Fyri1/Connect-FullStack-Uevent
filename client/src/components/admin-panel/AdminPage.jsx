import React from "react";

import Spinner from "../common/Spinner.jsx";
import NavbarElement from "./NavbarElement.jsx";

import adminRoutes from "../../routes/client/adminRoutes.js";

const AdminPage = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const onLoad = () => {
    try {
      console.log('sasi zagryzka: ' + isLoading);
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
        </div>
      }
    </div>
  )
}

export default AdminPage;
