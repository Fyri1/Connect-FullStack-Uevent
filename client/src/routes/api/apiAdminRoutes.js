const apiPath = 'http://localhost:8080/api';

// Admin DB data access points
export default {
  usersPath: () => [apiPath, 'admin', 'users'].join('/'),
  rolesPath: () => [apiPath, 'admin', 'roles'].join('/'),
  eventsPath: () => [apiPath, 'admin', 'events'].join('/'),
  categoriesPath: () => [apiPath, 'admin', 'categories'].join('/'),
  ticketsPath: () => [apiPath, 'admin', 'tickets'].join('/'),

};
