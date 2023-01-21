const clientPath = 'http://127.0.0.1:5173';

//  control panel routes
export default {
  fullMainPagePath: () => [clientPath, 'admin'].join('/'),
  mainPagePath: () => '/admin/',

  fullUsersPagePath: () => [clientPath, 'admin', 'users'].join('/'),
  usersPagePath: () => '/admin/users',

  fullRolesPagePath: () => [clientPath, 'admin', 'roles'].join('/'),
  rolesPagePath: () => '/admin/roles',

  fullEventsPagePath: () => [clientPath, 'admin', 'events'].join('/'),
  eventsPagePath: () => '/admin/events',

  fullCategoriesPagePath: () => [clientPath, 'admin', 'categories'].join('/'),
  categoriesPagePath: () => '/admin/categories',

  fullTicketsPagePath: () => [clientPath, 'admin', 'tickets'].join('/'),
  ticketsPagePath: () => '/admin/tickets'

};
