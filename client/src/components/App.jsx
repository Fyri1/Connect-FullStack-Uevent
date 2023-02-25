import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation, I18nextProvider } from 'react-i18next';
import i18next from "i18next";

// Common
import Header from './common/header/Header.jsx';
import PageNotFound from './common/PageNotFound.jsx';
import MainPage from './main-page/MainPage.jsx';

// FullMainItemPage
import MainItem from './main-page/MainItem.jsx';
import UserProfilePage from './profile/UserProfilePage.jsx';
import MyTicket from './user/MyTicket.jsx';
import PayForm from './payment/PayForm.jsx'

// Auth
import Login from './auth/Login.jsx';
import Register from './auth/Register.jsx';
import EmailConfirm from './auth/EmailConfirm.jsx';
import PassReset from './auth/PassReset.jsx';
import PartnerRegister from './auth/PartnerRegister.jsx';

// Admin panel
import AdminPage from './admin-panel/AdminPage.jsx';
import OrganizationPage from './admin-panel/OrganizationPage.jsx';
import ModeratorPage from './admin-panel/ModeratorPage.jsx';

import clientRoutes from '../routes/client/clientRoutes.js';
import adminRoutes from '../routes/client/adminRoutes.js';
import moderatorRoutes from '../routes/client/moderatorRoutes.js';
import organizationRoutes from '../routes/client/organizationRoutes.js';

const lngs = {
  en: { nativeName: 'en' },
  ru: { nativeName: 'ru' },
  ua: { nativeName: 'ua' },
};

const App = () => {
  // const [ t, i18n ] = useTranslation('header');

  return (
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* ya tak ponimau ety dro4 bydem uzat dlya checka user role */}
          {/* {isGuest ? ( */}
          <>
            {/* User routes */}
            <Route path={clientRoutes.mainPagePath()} element={<MainPage />} />
            <Route path={clientRoutes.loginPagePath()} element={<Login />} />

            {/* Sral Vilsan */}
            <Route path="/event/:id" element={<MainItem />} />
            {/* <Route path="/UserProfilePage" element={<UserProfilePage />} /> */}
            <Route path="/MyTicket" element={<MyTicket />} />
            <Route path="/PayForm" element={<PayForm />} />
            {/* neSral Vilsan */}

            <Route path={clientRoutes.registerPagePath()} element={<Register />} />
            <Route path={clientRoutes.confirmEmailPagePath()} element={<EmailConfirm />} />
            <Route path={clientRoutes.passResetPagePath()} element={<PassReset />} />
            <Route path={clientRoutes.partnershipRegisterPagePath()} element={<PartnerRegister />} />
            <Route path={clientRoutes.profilePagePath()} element={<UserProfilePage />} />

            {/* Admin routes */}
            <Route path={adminRoutes.mainPagePath()} element={<AdminPage dataCategory="users" />} />
            <Route path={adminRoutes.usersPagePath()} element={<AdminPage dataCategory="users" />} />
            <Route path={adminRoutes.rolesPagePath()} element={<AdminPage dataCategory="roles" />} />
            <Route path={adminRoutes.eventsPagePath()} element={<AdminPage dataCategory="events" />} />
            <Route path={adminRoutes.categoriesPagePath()} element={<AdminPage dataCategory="categories" />} />
            <Route path={adminRoutes.ticketsPagePath()} element={<AdminPage dataCategory="tickets" />} />
            <Route path={adminRoutes.organizationsPagePath()} element={<AdminPage dataCategory="organizations" />} />

            {/* Moderator routes */}
            <Route path={moderatorRoutes.mainPagePath()} element={<ModeratorPage />} />

            {/* Organization routes */}
            <Route path={organizationRoutes.mainPagePath()} element={<OrganizationPage />} />

            <Route path="*" element={<PageNotFound />} />
          </>
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  );
};

export default App;
