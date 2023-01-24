import Express from 'express';

import Users from '../controller/users-controller.js';
import adminRoutes from '../routes/admin-routes.js';


const router = Express.Router();

// User
router.get(adminRoutes.usersGetPath(), Users.getAllUsers);

router.get(adminRoutes.userIdGetPath(), Users.getAllUsers);
router.post(adminRoutes.userIdPostPath(), Users.getAllUsers);
router.put(adminRoutes.userIdUpdatePath(), Users.getAllUsers);
router.delete(adminRoutes.userIdDeletePath(), Users.getAllUsers);


export default router;
