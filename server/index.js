import Express from 'express';
import bodyParser from 'body-parser';
import authRouter from './router/auth-router.js';
import errorMiddleware from './middlewares/error-middleware.js';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
// import path from 'path';
import cookieParser from 'cookie-parser';

export default () => {
  dotenv.config();
  const app = new Express({ logger: true });

  app.use(cookieParser());
  app.use(cors());

  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  // app.use('/avatars', Express.static(`${path.resolve()}/avatars`));
  // app.use('/picture-post', Express.static(`${path.resolve()}/picture-post`));
  app.use('/api/auth', authRouter);
  app.use(errorMiddleware);
  return app;
};
