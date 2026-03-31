import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import leadRoutes from './routes/leadRoutes.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const clientDistPath = path.resolve(__dirname, '../../client/dist');
const clientIndexPath = path.join(clientDistPath, 'index.html');

function resolveAllowedOrigins() {
  if (!process.env.CLIENT_URL) {
    return true;
  }

  const allowedOrigins = process.env.CLIENT_URL.split(',').map((origin) => origin.trim());

  return (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error('Origin not allowed by CORS'));
  };
}

app.disable('x-powered-by');
app.use(helmet());
app.use(
  cors({
    origin: resolveAllowedOrigins()
  })
);
app.use(morgan('dev'));
app.use(express.json({ limit: '250kb' }));

app.get('/', (request, response) => {
  response.json({
    service: 'SS Roofing Specialist Limited API',
    status: 'ok'
  });
});

app.get('/health', (request, response) => {
  response.json({ status: 'ok' });
});

app.use(leadRoutes);

if (process.env.NODE_ENV === 'production' && fs.existsSync(clientIndexPath) && !process.env.VERCEL) {
  app.use(express.static(clientDistPath));

  app.get('*', (request, response) => {
    response.sendFile(clientIndexPath);
  });
}

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
