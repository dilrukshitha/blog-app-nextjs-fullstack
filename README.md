# BLOG-APP-NEXTJS-FULLSTACK

A full-stack blog application built using **Next.js** and **MongoDB**, designed for scalability and seamless user experience. The app provides a robust admin panel for blog management, rich content handling, and a fully responsive frontend for users to explore and interact with blogs.

---

## Features

- **Full-Stack Architecture**: Powered by Next.js for the frontend and backend with MongoDB as the database.
- **Rich Content Management**: Admin panel with support for tag previews and CRUD operations.
- **Responsive Design**: Optimized for all screen sizes, ensuring a seamless user experience.
- **Email Subscriptions**: Users can subscribe to receive updates.
- **Dynamic Routing**: Blog pages dynamically generated based on content.
- **Reusable Components**: Modular and scalable component structure.

---

## Project Architecture

BLOG-APP-NEXTJS-FULLSTACK/ ├── app/ # Next.js app directory for pages and layouts │ ├── admin/ # Admin panel routes │ │ ├── addProduct/ # Page for adding new blog posts │ │ ├── blogList/ # Page displaying all blogs (admin view) │ │ ├── subscriptions/ # Page for managing email subscriptions │ │ └── layout.jsx # Shared layout for admin panel │ ├── api/ # Backend API routes │ │ ├── blog/route.js # CRUD APIs for blogs │ │ └── email/route.js # API for managing email subscriptions │ ├── blogs/[id]/ # Dynamic blog post pages │ └── page.jsx # Homepage ├── fonts/ # Custom fonts for the application ├── Components/ # Reusable React components │ ├── AdminComponents/ # Components specific to admin panel │ │ ├── BlogTableItem.jsx │ │ ├── Sidebar.jsx │ │ └── SubsTableItem.jsx │ ├── BlogItem.jsx # Component for rendering individual blog items │ ├── BlogList.jsx # Component for rendering the list of blogs │ ├── Footer.jsx # Footer component │ └── Header.jsx # Header component ├── public/ # Static assets like favicon ├── lib/ # Utility and helper functions (if any) ├── globals.css # Global CSS for styling └── .eslintrc.json # ESLint configuration for linting

---

## How to Use

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/blog-app-nextjs-fullstack.git
   cd blog-app-nextjs-fullstack

   ```

2. Install dependencies:
   npm install

3. (Optional)Set up environment variables: Create a .env.local file in the root directory and
   add the following:
   MONGODB_URI=your-mongodb-connection-string
   NEXT_PUBLIC_SITE_URL=your-website-url


### Running the Application
npm run dev
http://localhost:3000
npm run build
npm start


### Admin Panel
Navigate to /admin to access the admin panel.
Features include:
    Add new blog posts (/admin/addProduct).
    View and manage all blogs (/admin/blogList).
    Manage email subscriptions (/admin/subscriptions).

### API Endpoints
Blogs
    GET /api/blog: Fetch all blogs.
    POST /api/blog: Add a new blog.
    PUT /api/blog/:id: Update a blog by ID.
    DELETE /api/blog/:id: Delete a blog by ID.
Email Subscriptions
    POST /api/email: Add a new email to the subscription list.
    DELETE /api/email/:id: Remove an email subscription by ID.

### Technologies Used
Frontend: Next.js, React, TailwindCSS
Backend: Next.js API Routes
Database: MongoDB
Styling: TailwindCSS
Fonts: Custom fonts hosted in the fonts directory