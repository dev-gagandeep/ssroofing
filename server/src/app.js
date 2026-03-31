import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import leadRoutes from './routes/leadRoutes.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const clientDistPath = path.resolve(__dirname, '../../client/dist');

app.disable('x-powered-by');
app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_URL || '*'
  })
);
app.use(morgan('dev'));
app.use(express.json({ limit: '250kb' }));

app.get('/health', (request, response) => {
  response.json({ status: 'ok' });
});

app.use(leadRoutes);
app.use(notFoundHandler);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(clientDistPath));

  app.get('*', (request, response) => {
    response.sendFile(path.join(clientDistPath, 'index.html'));
  });
}

app.use(errorHandler);

export default app;
