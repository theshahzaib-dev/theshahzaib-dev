# Portfolio Site - Project Plan & Timeline

## Project Overview

**Single-Person Portfolio Site** with two distinct interfaces:

1. **Public User Site** (View-Only)

   - Visitors can browse portfolio content (read-only)
   - Real-time chat functionality
   - No authentication required

2. **Admin Site** (Full Management)
   - All CRUD operations for content management
   - Real-time chat functionality
   - Admin authentication required
   - Protected routes

**Key Principle**: All content management happens in the admin site. The public site is purely for viewing and chatting.

---

## Technology Stack

### Frontend

- **Framework**: Next.js 14 (App Router) - Recommended for better SEO and performance
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: Redux Toolkit (RTK) for API integration
- **Authentication**: JWT tokens (frontend handling)

### Backend

- **Runtime**: Node.js with Express.js
- **Architecture**: MVC Pattern
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT + bcrypt
- **Real-time**: WebSocket (Socket.io)
- **API**: RESTful APIs

---

## Feature Breakdown by Role

### 👤 PUBLIC USER SITE (View-Only + Chat)

1. **Public Portfolio View (Read-Only)**

   - Home page with hero section
   - About section (read-only)
   - Skills/Technologies showcase (read-only)
   - Projects portfolio (filterable, read-only)
   - Blog/Articles section (if applicable, read-only)
   - Responsive design

2. **Real-Time Chat Feature**

   - Chat interface for visitors
   - WebSocket connection
   - Send/receive messages with admin
   - Chat history (optional)

3. **No Authentication Required**
   - Public access to all portfolio content
   - No registration/login needed for visitors

### 👨‍💼 ADMIN SITE (Full CRUD + Chat)

1. **Admin Authentication**

   - Admin login only
   - Protected admin routes
   - JWT-based session management

2. **Dashboard**

   - Overview statistics
   - Recent chat messages
   - Quick actions
   - Content status overview

3. **Content Management (All CRUD Operations)**

   - **Projects**: Create, Read, Update, Delete
   - **Skills**: Create, Read, Update, Delete
   - **About Section**: Update content
   - **Blog/Articles**: Create, Read, Update, Delete (if applicable)
   - **Contact Information**: Update
   - File upload for project images
   - Content preview

4. **Real-Time Chat Management**

   - Chat interface (same as user site)
   - View all chat conversations
   - Chat history management
   - Mark messages as read/unread

5. **Settings**
   - Site configuration
   - Theme customization
   - SEO settings
   - Admin profile management

---

## Development Timeline

### Phase 1: Frontend Development (Weeks 1-3)

#### Week 1: Project Setup & Foundation

- [ ] Initialize Next.js project with TypeScript
- [ ] Setup Tailwind CSS
- [ ] Install and configure shadcn/ui
- [ ] Setup Redux Toolkit with RTK Query
- [ ] Project folder structure
- [ ] Basic routing setup
- [ ] Theme configuration (dark/light mode)

#### Week 2: Core UI Components & Pages

- [ ] Design system with shadcn components
- [ ] Layout components (Header, Footer, Sidebar)
- [ ] Home page (Hero, About preview)
- [ ] Projects page (grid/list view)
- [ ] Project detail page
- [ ] Skills/Technologies page
- [ ] Contact page with form
- [ ] 404 and error pages

#### Week 3: Chat UI & Admin Authentication

- [ ] Chat component (for both user and admin)
- [ ] WebSocket client setup
- [ ] Admin login page
- [ ] Protected admin routes setup
- [ ] Admin dashboard layout
- [ ] Loading states and error handling
- [ ] Responsive design refinement

### Phase 2: Backend Development (Weeks 4-6)

#### Week 4: Backend Foundation & Admin Authentication

- [ ] Initialize Express.js project with MVC structure
- [ ] MongoDB connection setup
- [ ] Admin User model and schema (single admin user)
- [ ] Authentication middleware
- [ ] JWT token generation/verification
- [ ] Admin Login API (no registration - admin created manually)
- [ ] Password hashing with bcrypt
- [ ] Admin route protection middleware

#### Week 5: Core APIs & Models (Admin Only CRUD)

- [ ] Project model and CRUD APIs (admin protected)
- [ ] Skill model and CRUD APIs (admin protected)
- [ ] About section model and Update API (admin protected)
- [ ] Blog/Article model and CRUD APIs (if needed, admin protected)
- [ ] Public read-only APIs (for user site)
- [ ] File upload handling (for project images, admin only)
- [ ] API validation and error handling

#### Week 6: Admin APIs & WebSocket Chat

- [ ] Admin dashboard APIs (statistics, overview)
- [ ] WebSocket setup (Socket.io)
- [ ] Chat message model and storage
- [ ] Real-time chat functionality (both user and admin)
- [ ] Chat history API (admin only)
- [ ] Real-time notifications for admin

### Phase 3: Integration & Testing (Week 7)

#### Week 7: Frontend-Backend Integration

- [ ] Connect RTK Query to backend APIs
  - Public read APIs for user site
  - Admin CRUD APIs (protected)
- [ ] Implement admin authentication flow
- [ ] Connect WebSocket client (both user and admin)
- [ ] Chat integration (real-time messaging)
- [ ] Error handling and loading states
- [ ] Form validations (admin forms)
- [ ] Testing and bug fixes
- [ ] Performance optimization

---

## Project Structure

```
PortfolioSite/
├── frontend/                 # Next.js application
│   ├── app/                  # App router pages
│   ├── components/           # React components
│   │   ├── ui/               # shadcn components
│   │   ├── layout/           # Layout components
│   │   └── features/         # Feature-specific components
│   ├── lib/                  # Utilities
│   ├── store/                # Redux store & slices
│   ├── hooks/                # Custom hooks
│   └── types/                # TypeScript types
│
└── backend/                  # Express.js application
    ├── src/
    │   ├── controllers/      # Route controllers
    │   ├── models/           # MongoDB models
    │   ├── views/            # Views (if using server-side rendering)
    │   ├── routes/           # API routes
    │   ├── middleware/       # Custom middleware
    │   ├── services/         # Business logic
    │   ├── utils/            # Utilities
    │   └── config/           # Configuration files
    ├── tests/                # Test files
    └── server.js             # Entry point
```

---

## Next Steps

We'll start with **Phase 1: Frontend Development** and begin with Week 1 tasks.

Would you like me to:

1. Initialize the Next.js project with all the setup?
2. Start with a specific component or page?
3. Adjust the timeline or features?

Let me know and we'll begin! 🚀
