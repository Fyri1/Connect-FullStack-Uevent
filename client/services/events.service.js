import $api from '../utils/api.js';
import routes from '../src/routes/api/apiClientRoutes.js';

const EventService = {
  getAll() {
    return $api.get(routes.getAllEvent());
  },
  getEventId(id) {
    return $api.get(routes.getEventById(id))
  }
};

export { EventService };
