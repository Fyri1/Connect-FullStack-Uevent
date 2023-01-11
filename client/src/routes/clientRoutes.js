const clientPath = 'http://127.0.0.1:5173';

export default {
  fullMainPagePath: () => clientPath,
  mainPagePath: () => '/',

  fullLoginPath: () => [clientPath, 'login'].join('/'),
  loginPath: () => '/login',

  fullRegisterPath: () => [clientPath, 'register'].join('/'),
  registerPath: () => '/register',

  fullPassResetPath: () => [clientPath, 'pass-reset'].join('/'),
  PassResetPath: () => '/pass-reset',

  fullConfirmEmail: () => [clientPath, 'comfirm-email'].join('/'),

  fullProfilePath: () => [clientPath, 'user'].join('/'),

  fullUserTicketsPath: () => [clientPath, 'user', 'tickets'].join('/'),

  fullEventPath: (eventId) => [clientPath, 'event', eventId].join('/'),

};
