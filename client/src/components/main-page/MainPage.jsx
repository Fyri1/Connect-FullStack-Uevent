import React from "react";

import Spinner from '../common/Spinner.jsx';
import apiRoutes from '../../routes/apiRoutes.js';
import clientRoutes from '../../routes/clientRoutes.js';

const MainPage = () => {
  const [eventsList, setEventsList] = React.useState([]);
  const [userData, setUserData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  const onLoad = () => {
    try {
      // Throw request on api for events and logged user info if any
      console.log('sasi zagryzka: ' + isLoading);
      setEventsList([]);
      setUserData({
        fullname: "dayn",
        login: "dayn_login",
        email: "dayn_email"
      });
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
        <p>This is MainPage</p>
      }
    </div>
  );
}

export default MainPage;
