# SparkClean Services — Frontend

React + Vite frontend for the SparkClean Services business website.

## Stack

- React 19
- Vite 8
- Tailwind CSS 4

## Local Development

```bash
# Install dependencies
npm install

# Create your local env file
cp .env.example .env
# Set VITE_API_URL=http://localhost:5000 in .env

# Start dev server
npm run dev
# → http://localhost:5173
```

## Build

```bash
npm run build
# Output in dist/
```

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_API_URL` | Backend API base URL (no trailing slash) |

## Deployment (Vercel)

1. Push this folder to GitHub
2. Import project in Vercel, set root directory to `frontend/`
3. Add environment variable: `VITE_API_URL=https://your-backend.onrender.com`
4. Deploy
