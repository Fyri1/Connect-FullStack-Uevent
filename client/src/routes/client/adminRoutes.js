const clientPath = 'http://127.0.0.1:5173';

// Admin control panel routes
export default {
  // Main page
  fullMainPagePath: () => [clientPath, 'admin'].join('/'),
  mainPagePath: () => '/admin/',

  // Users
  fullUsersPagePath: () => [clientPath, 'admin', 'users'].join('/'),
  usersPagePath: () => '/admin/users',

  // Roles
  fullRolesPagePath: () => [clientPath, 'admin', 'roles'].join('/'),
  rolesPagePath: () => '/admin/roles',

  // Events
  fullEventsPagePath: () => [clientPath, 'admin', 'events'].join('/'),
  eventsPagePath: () => '/admin/events',

  fullEventsEditPagePath: () => [clientPath, 'admin', 'events'].join('/'),

  // Categories
  fullCategoriesPagePath: () => [clientPath, 'admin', 'categories'].join('/'),
  categoriesPagePath: () => '/admin/categories',

  // Tickets
  fullTicketsPagePath: () => [clientPath, 'admin', 'tickets'].join('/'),
  ticketsPagePath: () => '/admin/tickets'

};
