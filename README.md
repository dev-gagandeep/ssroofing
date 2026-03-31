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

## API Endpoints

- `POST /contact`
- `POST /quote`

Both endpoints validate input and store leads in MongoDB.

## Production Checklist

- Replace the placeholder company registration number in `client/src/data/siteData.js`
- Replace placeholder phone and email values with live contact details
- Update `client/public/sitemap.xml` if the final production domain changes
- If you add analytics, cookie banners, or advertising pixels, update the privacy policy and consent flow before launch
- Build the frontend before starting the production server so Express can serve `client/dist`
- Submit the live sitemap to Google Search Console after launch
- Create and verify a Google Business Profile using the same name, address, and phone shown on the site for stronger local ranking signals
- Add real reviews, completed project photos, and ongoing blog content after launch to build authority over time
