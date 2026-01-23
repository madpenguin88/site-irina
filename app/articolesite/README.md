# Articole Admin Site

Site de administrare pentru articole cu Vite + React (frontend) și Node.js + Express (backend).

## Structura proiectului

```
articolesite/
├── backend/          # Server Node.js + Express
│   ├── server.js     # API server
│   ├── data/         # Stocare JSON
│   └── uploads/      # Fișiere încărcate
└── frontend/         # Aplicație Vite + React
    └── src/
        ├── components/
        └── api.ts
```

## Pornirea proiectului

### Backend (Port 3001)

```bash
cd backend
npm install
npm run dev
```

### Frontend (Port 5173)

```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

- `GET /api/articles` - Lista toate articolele
- `GET /api/articles/:id` - Obține un articol
- `POST /api/articles` - Creează un articol nou
- `PUT /api/articles/:id` - Actualizează un articol
- `DELETE /api/articles/:id` - Șterge un articol
- `POST /api/upload` - Încarcă o imagine
- `DELETE /api/upload/:filename` - Șterge o imagine
- `GET /uploads/:filename` - Servește fișierele încărcate

## Funcționalități

- ✅ Creare/Editare/Ștergere articole
- ✅ Încărcare imagini (drag & drop)
- ✅ URL-uri pentru imagini (pentru utilizare în site-ul principal)
- ✅ Status publicat/draft
- ✅ Stocare în fișiere JSON
