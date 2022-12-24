const clientPath = 'http://127.0.0.1:5173/';

export default {
  mainPagePath: () => clientPath,
  loginPath: () => [clientPath, 'login'].join('/'),
  registerPath: () => [clientPath, 'register'].join('/'),
  confirmEmail: () => [clientPath, 'comfirm-email'].join('/'),
  profilePath: () => [clientPath, 'user'].join('/'),
  userTicketsPath: () => [clientPath, 'user', 'tickets'].join('/'),
  eventPath: (eventId) => [clientPath, 'event', eventId].join('/'),
};
