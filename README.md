# 📝 Real-Time Collaborative Text Editor

A powerful, real-time collaborative text editor built with **Next.js 15**, **Convex**, **Clerk Auth**, and **Liveblocks**, designed to support modern writing workflows across teams and organizations.

---

## 🚀 Features

### ✨ Core Editing Features
- 📝 Rich Text Editor with intuitive UX
- 💭 Comments & Mentions
- 📑 Document Templates
- 📋 Copy/Paste Formatting
- ↩️ Undo/Redo History
- 📊 Table Support
- 📏 Margin & Layout Controls
- ⬇️ Export to PDF, HTML, TXT, JSON

### 🧠 Collaboration & User Tools
- 🤝 Real-time multi-user editing with cursor tracking
- 🎯 Per-user cursor tracking with names & colors
- 👥 User profiles via Clerk Auth
- 🏢 Organization workspaces and document management
- ✉️ Organization invites with role control

### 🧰 Tech Stack
- ⚛️ Framework: **Next.js 15 (App Router)**
- 🎨 UI: **Shadcn UI** + **Tailwind CSS**
- 🧠 Backend: **Convex** for database & real-time sync
- 🔐 Auth: **Clerk**
- 🔁 Realtime: **Liveblocks**
- 🌐 Hosting: **Vercel**

---

## 📸 Live Demo

🔗 [View Live Project](https://task-1-realtime-text-editor.vercel.app/)  
--- 

## 🧪 Project Highlights

- ✅ Real-time collaboration across multiple browser sessions
- ✅ Changes are instantly synced across tabs and users
- ✅ Unique user cursors and colors for distinction
- ✅ Organization-aware document editing

---

## 🛠️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/arnavco9573/arnav-sharma-wasserstoff-FrontEndInternTask.git
cd arnav-sharma-wasserstoff-FrontEndInternTask
```

### 2. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 3. Run the App
```bash
npm run dev
```

### 4.Also run the database
```bash
npx convex dev
```

### 5. Set Up Environment Variables
- Create a .env.local file and add the following:
- CONVEX_DEPLOYMENT=your_convex_deployment_id
- NEXT_PUBLIC_CONVEX_URL=your_public_convex_url

- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
- CLERK_SECRET_KEY=your_clerk_secret_key

- LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret_key


