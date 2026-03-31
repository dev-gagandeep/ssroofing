# SS Roofing Specialist Limited

Full-stack website for a UK-based roofing company with a React + Tailwind frontend and an Express + MongoDB backend.

## Structure

```text
/client  React frontend
/server  Express API + MongoDB models
```

## Setup

### 1. Install dependencies

```bash
cd client
npm install

cd ../server
npm install
```

### 2. Configure environment

Create `server/.env`:

```bash
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/ss-roofing-specialist
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

Create `client/.env` if you want to override the API URL:

```bash
VITE_API_BASE_URL=http://localhost:5000
```

### 3. Run locally

Frontend:

```bash
cd client
npm run dev
```

Backend:

```bash
cd server
npm run dev
```

## Production build

Build the frontend:

```bash
cd client
npm run build
```

Run the backend in production mode. It will serve `client/dist` automatically when available:

```bash
cd server
npm start
```

## Deploying To Vercel

This repo is best deployed as two Vercel projects from the same GitHub repository:

- `client` as the frontend project
- `server` as the API project

### Frontend project

When importing the repo into Vercel:

- Set the Root Directory to `client`
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

Add this environment variable in the frontend Vercel project:

```bash
VITE_API_BASE_URL=https://your-api-project.vercel.app
```

### Backend project

Create a second Vercel project from the same repo:

- Set the Root Directory to `server`
- Framework Preset: `Other`

Add these environment variables in the backend Vercel project:

```bash
MONGODB_URI=your_mongodb_connection_string
CLIENT_URL=https://your-frontend-project.vercel.app
NODE_ENV=production
```

If you later connect a custom frontend domain, update `CLIENT_URL` to that final domain. You can also provide multiple allowed frontend origins as a comma-separated list.

### Suggested order

1. Deploy the `server` project first
2. Copy its Vercel URL
3. Add that URL as `VITE_API_BASE_URL` in the `client` project
4. Deploy the `client` project
5. Update `CLIENT_URL` in the backend project if your frontend URL changes

## API Endpoints

- `POST /contact`
- `POST /quote`

Both endpoints validate input and store leads in MongoDB.

## Production Checklist

- Replace the placeholder company registration number in `client/src/data/siteData.js`
- Replace placeholder phone and email values with live contact details
- Update `client/public/sitemap.xml` if the final production domain changes
- Remove the temporary `noindex, nofollow` directive in `client/index.html` before public launch
- Change `client/public/robots.txt` back to allow crawling before public launch
- If you add analytics, cookie banners, or advertising pixels, update the privacy policy and consent flow before launch
- Build the frontend before starting the production server so Express can serve `client/dist`
- Submit the live sitemap to Google Search Console after launch
- Create and verify a Google Business Profile using the same name, address, and phone shown on the site for stronger local ranking signals
- Add real reviews, completed project photos, and ongoing blog content after launch to build authority over time
