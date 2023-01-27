import Express from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
// import path from 'path';
import cookieParser from 'cookie-parser';

import authRouter from './router/auth-router.js';
import eventRouter from './router/event-router.js';
import adminRouter from './router/admin-router.js';
import errorMiddleware from './middlewares/error-middleware.js';

export default () => {
  dotenv.config();
  const app = new Express({ logger: true });

  app.use(cookieParser());
  app.use(
    cors({
      origin: 'http://127.0.0.1:5173/',
      credentials: true,
    })
  );

  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  // app.use('/avatars', Express.static(`${path.resolve()}/avatars`));
  // app.use('/picture-post', Express.static(`${path.resolve()}/picture-post`));
  app.use('/api/auth', authRouter);
  app.use('/api/event', eventRouter);
  app.use('/api/user', adminRouter);
  app.use(errorMiddleware);
  return app;
};
