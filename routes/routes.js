import express from 'express';
import user from './user.routes.js';
import record from './record.routes.js';
import login from './login.routes.js';

const router = express.Router();

router.use('/user', user);
router.use('/record', record);
router.use('/login', login);

export default router;