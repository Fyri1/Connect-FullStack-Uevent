import $api from '../utils/api.js';
import routes from '../src/routes/api/apiClientRoutes.js';

const EventService = {
  getAll() {
    return $api.get(routes.getAllEvent());
  },
};

export { EventService };
