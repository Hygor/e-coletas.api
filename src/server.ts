import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';

const server = express();

server.use(cors())
      .use(express.json())
      .use('/uploads',
        express.static(
          path.resolve( __dirname, '..', 'uploads')
        )
      )
      .use(routes)
      .listen(3333);