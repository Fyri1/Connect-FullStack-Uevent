import Express from 'express';

import Users from '../controller/users-controller.js';
import adminRoutes from '../routes/admin-routes.js';


const router = Express.Router();

// User
// console.log(adminRoutes.usersGetPath());
router.get(adminRoutes.usersGetPath(), Users.getAllUsers);

router.get(adminRoutes.userIdGetPath(), Users.getUserById);
router.post(adminRoutes.userPostPath(), Users.createUser);
router.put(adminRoutes.userIdUpdatePath(), Users.updateUserData);
router.delete(adminRoutes.userIdDeletePath(), Users.deleteUser);


export default router;
