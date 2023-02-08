const apiPath = '';

// Admin DB data access points
export default {
  // Users
  usersGetPath: () => [apiPath].join('/'),
  userIdGetPath: (userId) => [apiPath, ':id'].join('/'),
  userPostPath: () => [apiPath, 'create'].join('/'),
  userIdUpdatePath: () => [apiPath, ':id', 'update'].join('/'),
  userChangeEmailPath: () => [apiPath, ':id', 'update', 'email'].join('/'),
  userSendEmailPath: () =>
    [apiPath, ':id', 'send', 'update', 'email'].join('/'),
  userChangePasswordPath: () =>
    [apiPath, ':id', 'update', 'password'].join('/'),
  userIdDeletePath: () => [apiPath, 'delete'].join('/'),

  // Roles
  rolesGetPath: () => [apiPath].join('/'),
  roleIdGetPath: (roleId) => [apiPath, 'get', roleId].join('/'),
  rolePostPath: () => [apiPath, 'create'].join('/'),
  roleIdUpdatePath: (roleId) => [apiPath, 'update', roleId].join('/'),
  roleIdDeletePath: (roleId) => [apiPath, 'delete', roleId].join('/'),

  // Events
  eventsGetPath: () => [apiPath].join('/'),
  eventIdGetPath: (eventId) => [apiPath, 'get', eventId].join('/'),
  eventPostPath: () => [apiPath, 'create'].join('/'),
  eventCategoriesGetPath: (id) => [apiPath, ':id', 'categories'].join('/'),
  eventTicketsGetPath: (id) => [apiPath, ':id', 'tickets'].join('/'),
  eventSellTicketPath: () => [apiPath, ':id', 'ticket', 'sell'].join('/'),
  eventIdUpdatePath: () => [apiPath, ':id', 'update'].join('/'),
  eventIdDeletePath: () => [apiPath, ':id', 'delete'].join('/'),

  // Categories
  categoriesGetPath: () => [apiPath].join('/'),
  categoryIdGetPath: () => [apiPath, ':id'].join('/'),
  categoryIdGetAllEventPath: () => [apiPath, ':id', 'posts'].join('/'),
  categoryPostPath: () => [apiPath, 'create'].join('/'),
  categoryIdUpdatePath: () => [apiPath, ':id', 'update'].join('/'),
  categoryIdDeletePath: () => [apiPath, ':id', 'delete'].join('/'),

  // Tickets
  ticketsGetPath: () => [apiPath].join('/'),
  ticketIdGetPath: (ticketId) => [apiPath, 'get', ticketId].join('/'),
  ticketPostPath: () => [apiPath, 'create'].join('/'),
  ticketReturnPath: () => [apiPath, ':id', 'return'].join('/'),
  ticketIdUpdatePath: (ticketId) => [apiPath, 'update', ticketId].join('/'),
  ticketIdDeletePath: (ticketId) => [apiPath, 'delete', ticketId].join('/'),
};
