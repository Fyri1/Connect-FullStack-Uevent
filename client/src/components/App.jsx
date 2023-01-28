import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Header from './common/header/Header.jsx';
import Spinner from './common/Spinner.jsx';
import PageNotFound from './common/PageNotFound.jsx';
import MainPage from './main-page/MainPage.jsx';
import Login from './auth/Login.jsx';
import Register from './auth/Register.jsx';
import EmailConfirm from './auth/EmailConfirm.jsx';
import PassReset from './auth/PassReset.jsx';
import Profile from './user/Profile.jsx';

import AdminPage from './admin-panel/AdminPage.jsx';
import OrganizationPage from './admin-panel/OrganizationPage.jsx';
import ModeratorPage from './admin-panel/ModeratorPage.jsx';
import EditPage from './admin-panel/edit/EditPage.jsx';
import UserEditPage from './admin-panel/edit/UserEditPage.jsx';
import EventEditPage from './admin-panel/edit/EventEditPage.jsx';

import clientRoutes from '../routes/client/clientRoutes.js';
import adminRoutes from '../routes/client/adminRoutes.js';
import moderatorRoutes from '../routes/client/moderatorRoutes.js';
import organizationRoutes from '../routes/client/organizationRoutes.js';
import LanguageContext from '../context/languageContext.js';

const lngs = {
  en: {
    nativeName: 'en',
  },
  ua: {
    nativeName: 'ua',
  },
};

const App = () => {
  const [socketConnected, setSocketConnected] = React.useState(true);
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    // socket.on('connection', () => console.log(socket.id));
    // !localStorage.getItem('jwt') ? setGuest(true) : setGuest(false);
    setSocketConnected(false);
  }, []);

  // const buttonTranslate = Object.keys(lngs).map((lng) => {
  //   return (
  //     <button
  //       type="submit"
  //       key={lng}
  //       className={`mx-2 text-white ${
  //         i18n.resolvedLanguage === lng ? 'text-orange-800' : 'text-orange-400'
  //       } ${i18n.resolvedLanguage === lng ? null : 'underline'}`}
  //       onClick={() => i18n.changeLanguage(lng)}
  //       disabled={i18n.resolvedLanguage === lng}
  //     >
  //       {lngs[lng].nativeName}
  //     </button>
  //   );
  // });

  return socketConnected ? (
    <Spinner />
  ) : (
    <LanguageContext.Provider value={{ t }}>
      {/* <SocketContext.Provider value={{ socket }}> */}
      <BrowserRouter>
        <Header />
        <Routes>
          {/* ya tak ponimau ety dro4 bydem uzat dlya checka user role */}
          {/* {isGuest ? ( */}
          <>
            {/* User routes */}
            <Route path={clientRoutes.mainPagePath()} element={<MainPage />} />
            <Route path={clientRoutes.loginPagePath()} element={<Login />} />
            <Route path={clientRoutes.registerPagePath()} element={<Register />} />
            <Route path={clientRoutes.confirmEmailPagePath()} element={<EmailConfirm />} />
            <Route path={clientRoutes.passResetPagePath()} element={<PassReset />} />
            <Route path={clientRoutes.profilePagePath()} element={<Profile />} />

            {/* Admin routes */}
            <Route path={adminRoutes.mainPagePath()} element={<AdminPage dataCategory="users" />} />
            <Route path={adminRoutes.usersPagePath()} element={<AdminPage dataCategory="users" />} />
            <Route path={adminRoutes.rolesPagePath()} element={<AdminPage dataCategory="roles" />} />
            <Route path={adminRoutes.eventsPagePath()} element={<AdminPage dataCategory="events" />} />
            <Route path={adminRoutes.eventCreatePagePath()} element={<EventEditPage />} />
            <Route path={adminRoutes.categoriesPagePath()} element={<AdminPage dataCategory="categories" />} />
            <Route path={adminRoutes.ticketsPagePath()} element={<AdminPage dataCategory="tickets" />} />

            {/* Moderator routes */}
            <Route path={moderatorRoutes.mainPagePath()} element={<ModeratorPage />} />

            {/* Organization routes */}
            <Route path={organizationRoutes.mainPagePath()} element={<OrganizationPage />} />

            <Route path="*" element={<PageNotFound />} />
          </>
          {/* ) : (
                <Route path="/" element={<Calendar />} />
              )} */}
        </Routes>
      </BrowserRouter>
      {/* </SocketContext.Provider> */}
    </LanguageContext.Provider>
  );
};

export default App;
