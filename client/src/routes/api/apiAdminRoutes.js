const apiPath = 'http://localhost:8080/api/admin';

// Admin DB data access points
export default {
  // User
  usersGetPath: () => [apiPath, 'users'].join('/'),

  userIdGetPath: (userId) => [apiPath, 'users', userId].join('/'),
  userIdPostPath: (userId) => [apiPath, 'users', userId].join('/'),
  userIdUpdatePath: (userId) => [apiPath, 'users', userId].join('/'),
  userIdDeletePath: (userId) => [apiPath, 'users', userId].join('/'),

};
