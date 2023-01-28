const apiPath = '';

// Admin DB data access points
export default {
  // Users
  usersGetPath: () => [apiPath].join('/'),
  userIdGetPath: (userId) => [apiPath, 'get', userId].join('/'),
  userPostPath: () => [apiPath, 'create'].join('/'),
  userIdUpdatePath: (userId) => [apiPath, 'update', userId].join('/'),
  userIdDeletePath: (userId) => [apiPath, 'delete', userId].join('/'),

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
  eventTicketsGetPath: (id) => [apiPath, ':id', 'tickets'].join('/'),
  eventSellTicketPath: () => [apiPath, ':id', 'ticket', 'sell'].join('/'),
  eventIdUpdatePath: (eventId) => [apiPath, 'update', eventId].join('/'),
  eventIdDeletePath: (eventId) => [apiPath, 'delete', eventId].join('/'),

  // Categories
  categoriesGetPath: () => [apiPath].join('/'),
  categoryIdGetPath: (categoryId) => [apiPath, 'get', categoryId].join('/'),
  categoryPostPath: () => [apiPath, 'create'].join('/'),
  categoryIdUpdatePath: (categoryId) =>
    [apiPath, 'update', categoryId].join('/'),
  categoryIdDeletePath: (categoryId) =>
    [apiPath, 'delete', categoryId].join('/'),

  // Tickets
  ticketsGetPath: () => [apiPath].join('/'),
  ticketIdGetPath: (ticketId) => [apiPath, 'get', ticketId].join('/'),
  ticketPostPath: () => [apiPath, 'create'].join('/'),
  ticketReturnPath: () => [apiPath, ':id', 'return'].join('/'),
  ticketIdUpdatePath: (ticketId) => [apiPath, 'update', ticketId].join('/'),
  ticketIdDeletePath: (ticketId) => [apiPath, 'delete', ticketId].join('/'),
};
