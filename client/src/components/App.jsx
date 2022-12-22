import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageContext from '../context/languageContext.js';

import Header from './common/Header.jsx';
import Spinner from './common/Spinner.jsx';
import PageNotFound from './common/PageNotFound.jsx';
import MainPage from './main-page/MainPage.jsx';
import Login from './auth/Login.jsx';
import Register from './auth/Register.jsx';
import EmailConfirm from './auth/EmailConfirm.jsx';
import Profile from './user/Profile.jsx'

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
              {/* {isGuest ? ( */}
                <>
                  <Route path="/" element={<MainPage />} />

                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/comfirm-email" element={<EmailConfirm />} />

                  <Route path="/user" element={<Profile />} />

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
