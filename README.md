# Portfolio Site - Frontend

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: Redux Toolkit (RTK)
- **Theme**: Dark/Light mode support

## Project Structure

```
frontend/
├── app/
│   ├── portfolio/          # Public portfolio pages (view-only)
│   │   ├── layout.tsx      # Public layout with header/footer
│   │   └── page.tsx        # Home page
│   ├── admin/              # Admin pages (CRUD operations)
│   │   ├── layout.tsx      # Admin layout with sidebar
│   │   ├── login/          # Admin login
│   │   └── page.tsx        # Admin dashboard
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Root redirects to /portfolio
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── layout/             # Layout components (Header, Footer, Sidebar)
│   └── providers/          # Context providers
├── store/                  # Redux store configuration
├── lib/                    # Utilities and helpers
└── types/                  # TypeScript type definitions
```

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
npm start
```

## Routes

### Public Routes (View-Only)
- `/portfolio` - Home page
- `/portfolio/about` - About section
- `/portfolio/projects` - Projects showcase
- `/portfolio/skills` - Skills/Technologies
- `/portfolio/contact` - Contact page with chat

### Admin Routes (Protected)
- `/admin/login` - Admin login
- `/admin` - Admin dashboard
- `/admin/projects` - Manage projects (CRUD)
- `/admin/skills` - Manage skills (CRUD)
- `/admin/about` - Manage about section
- `/admin/chat` - Chat management
- `/admin/settings` - Site settings

## Features Implemented

✅ Next.js 14 with TypeScript
✅ Tailwind CSS configuration
✅ shadcn/ui components setup
✅ Redux Toolkit store setup
✅ Theme provider (dark/light mode)
✅ Basic routing structure
✅ Layout components (Header, Footer, Sidebar)
✅ Public and Admin route separation

## Next Steps

- [ ] Create API slice with RTK Query
- [ ] Implement authentication flow
- [ ] Build portfolio pages (Home, About, Projects, Skills)
- [ ] Build admin CRUD interfaces
- [ ] Implement WebSocket for chat
- [ ] Add form validations
- [ ] Add loading and error states
