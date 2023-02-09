const apiPath = 'http://localhost:8080/api';

export default {
  loginPath: () => [apiPath, 'auth', 'login'].join('/'),
  registerPath: () => [apiPath, 'auth', 'register'].join('/'),
  logoutPath: () => [apiPath, 'auth', 'logout'].join('/'),
  sendMailResetPassword: () => [apiPath, 'auth', 'password-reset'].join('/'),
  resetPassword: (token) => [apiPath, 'auth', 'password-reset', token].join('/'),
  userChangePasswordPath: () => [apiPath, ':id', 'update', 'password'].join('/'),
  confirmEmail: (token) => [apiPath, 'auth', 'active', token].join('/'),
  getAllEvent: () => [apiPath, 'event'].join('/'),
  usersGetInfoPath: () => [apiPath, 'user', 'profile'].join('/'),
  userIdGetPath: (userId) => [apiPath, 'user', userId].join('/'),
};
