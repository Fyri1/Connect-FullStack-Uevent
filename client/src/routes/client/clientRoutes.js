const clientPath = 'http://127.0.0.1:5173';

export default {
  fullMainPagePath: () => clientPath,
  mainPagePath: () => '/',

  // Auth
  fullLoginPagePath: () => [clientPath, 'login'].join('/'),
  loginPagePath: () => '/login',

  fullRegisterPagePath: () => [clientPath, 'register'].join('/'),
  registerPagePath: () => '/register',

  fullPassResetPagePath: () => [clientPath, 'pass-reset'].join('/'),
  passResetPagePath: () => '/pass-reset',

  fullConfirmEmailPagePath: () => [clientPath, 'comfirm-email'].join('/'),
  confirmEmailPagePath: () => '/comfirm-email',

  fullPartnershipRegisterPagePath: () => [clientPath, 'comfirm-email'].join('/'),
  partnershipRegisterPagePath: () => '/comfirm-email',
  // Auth

  fullProfilePagePath: (userId) => [clientPath, 'user', userId].join('/'),
  profilePagePath: (userId) => '/user/' + userId,

  fullUserTicketsPagePath: () => [clientPath, 'user', 'tickets'].join('/'),
  userTicketsPagePath: () => '/tickets',

  fullEventPagePath: (eventId) => [clientPath, 'event', eventId].join('/'),
  eventPagePath: (eventId) => '/event/' + eventId,

};
