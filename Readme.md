# Blog Application Platform

A full-stack, feature-rich blogging platform with user authentication, content management, and an admin dashboard. Built with modern, production-grade technologies for scalability, performance, and maintainability.

---

## 🌟 Project Overview

The **Blog Application Platform** is a comprehensive web application that empowers users to create, read, update, and delete blog posts. It features secure user authentication, role-based access control, media management, and a responsive user interface. The application is designed with a microservices-ready architecture and follows industry best practices.

---

## ✨ Key Features

- **User Authentication & Authorization**
  - Secure JWT-based authentication
  - Password encryption with bcryptjs
  - Role-based access control (User, Admin)
  - Persistent sessions with cookie management

- **Blog Management**
  - Create, read, update, and delete blog posts
  - Rich content support with media uploads
  - Blog categorization and filtering
  - User-specific blog dashboard
  - Trending blogs display

- **Media Management**
  - Cloud-based image storage with Cloudinary
  - Optimized image delivery
  - Automatic media optimization

- **User Profile Management**
  - User profile creation and customization
  - Profile information update
  - User activity tracking

- **Creator Showcase**
  - Featured creators section
  - Creator profiles and statistics
  - Creator follow functionality

- **Responsive Design**
  - Mobile-first approach
  - Cross-device compatibility
  - Optimized performance

---

## 📸 ScreenShot

![alt text](image.png)

## 🛠️ Core Technologies

### **Backend Stack**
| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js/Express.js** | ^4.19.2 | RESTful API server & middleware framework |
| **MongoDB** | - | NoSQL database for flexible data storage |
| **Mongoose** | ^8.5.3 | ODM for MongoDB with schema validation |
| **JWT (jsonwebtoken)** | ^9.0.2 | Secure token-based authentication |
| **bcryptjs** | ^2.4.3 | Password hashing & encryption |
| **Cloudinary** | ^2.4.0 | Cloud-based media management service |
| **Express-fileupload** | ^1.5.1 | File upload middleware |
| **CORS** | ^2.8.5 | Cross-origin resource sharing |
| **dotenv** | ^16.4.5 | Environment variable management |
| **Cookie-parser** | ^1.4.6 | Cookie parsing middleware |
| **Validator** | ^13.12.0 | Input data validation |
| **Nodemon** | ^3.1.4 | Development server auto-reload |

### **Frontend Stack**
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | ^18.3.1 | UI library for building interactive interfaces |
| **Vite** | ^7.2.7 | Next-generation build tool & dev server |
| **React Router DOM** | ^6.26.1 | Client-side routing & navigation |
| **Tailwind CSS** | ^3.4.10 | Utility-first CSS framework |
| **Axios** | ^1.7.5 | HTTP client for API requests |
| **React Hook Form** | ^7.53.0 | Performant form state management |
| **React Hot Toast** | ^2.4.1 | Toast notifications |
| **React Icons** | ^5.3.0 | Icon library |
| **React Multi Carousel** | ^2.8.5 | Responsive carousel component |
| **React Spinners** | ^0.14.1 | Loading spinner components |
| **ESLint** | ^9.9.0 | Code quality & style checking |

---

## 📋 Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v16.0.0 or higher)
- **npm** (v8.0.0 or higher) or **yarn**
- **MongoDB** (local or MongoDB Atlas account)
- **Cloudinary Account** (for image uploads)
- **Git**

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd blog-app-main
```

### 2. Backend Setup

Navigate to the backend directory and configure:

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory with the following variables:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>
JWT_SECRET=your_jwt_secret_key_here
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENV=development
```

Start the backend server:

```bash
npm run start
```

The backend will start on `http://localhost:5000`

### 3. Frontend Setup

Navigate to the frontend directory:

```bash
cd ../frontend
npm install
```

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the development server:

```bash
npm run dev
```

The frontend will start on `http://localhost:5173`

---

## 📁 Project Structure

```
blog-app-main/
│
├── backend/
│   ├── controller/              # Route controllers
│   │   ├── blog.controller.js
│   │   └── user.controller.js
│   ├── middleware/              # Custom middleware
│   │   └── authUser.js
│   ├── models/                  # Database models
│   │   ├── blog.model.js
│   │   └── user.model.js
│   ├── routes/                  # API routes
│   │   ├── blog.route.js
│   │   └── user.route.js
│   ├── jwt/                     # JWT utilities
│   │   └── AuthToken.js
│   ├── index.js                 # Server entry point
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/          # Reusable components
│   │   │   ├── Footer.jsx
│   │   │   ├── Home.jsx
│   │   │   └── Navbar.jsx
│   │   ├── context/             # React Context
│   │   │   └── AuthProvider.jsx
│   │   ├── dashboard/           # Dashboard pages
│   │   │   ├── CreateBlog.jsx
│   │   │   ├── MyBlogs.jsx
│   │   │   ├── MyProfile.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── UpdateBlog.jsx
│   │   ├── Home/                # Home page sections
│   │   │   ├── Creator.jsx
│   │   │   ├── Devotional.jsx
│   │   │   ├── Hero.jsx
│   │   │   └── Trending.jsx
│   │   ├── pages/               # Page components
│   │   │   ├── About.jsx
│   │   │   ├── Blogs.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Creators.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Detail.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── assets/              # Static assets
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/                  # Public assets
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── eslint.config.js
│
└── README.md
```

---

## 🔧 Usage

### Backend API Endpoints

#### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

#### Blogs
- `GET /api/blogs` - Get all blogs
- `GET /api/blogs/:id` - Get specific blog
- `POST /api/blogs` - Create new blog (Protected)
- `PUT /api/blogs/:id` - Update blog (Protected)
- `DELETE /api/blogs/:id` - Delete blog (Protected)

#### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile (Protected)

### Frontend Usage

1. **Register/Login** - Create an account or login with existing credentials
2. **Browse Blogs** - View all published blogs on the main page
3. **Create Blog** - Navigate to dashboard and create a new blog post
4. **Manage Blogs** - Edit or delete your own blog posts
5. **Update Profile** - Customize your user profile information
6. **View Creator Profiles** - Explore other creators and their blogs

---

## 🔐 Security Features

- **JWT-based Authentication**: Secure token-based user authentication
- **Password Encryption**: bcryptjs for robust password hashing
- **CORS Protection**: Configured CORS headers for secure cross-origin requests
- **Input Validation**: Server-side validation using validator library
- **Environment Variables**: Sensitive data stored in `.env` files
- **Protected Routes**: Middleware-based route protection

---

## ⚙️ Configuration

### Environment Variables

**Backend (.env)**
```
PORT=5000
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
CLOUDINARY_NAME=<your-cloudinary-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
NODE_ENV=development
```

**Frontend (.env)**
```
VITE_API_URL=http://localhost:5000/api
```

---

## 📦 Build & Deployment

### Build Frontend for Production

```bash
cd frontend
npm run build
```

The optimized build files will be generated in the `dist/` directory.

### Deploy Backend

The backend can be deployed to platforms like:
- **Heroku**
- **AWS EC2**
- **DigitalOcean**
- **Railway**
- **Vercel**

### Deploy Frontend

The frontend can be deployed to:
- **Vercel**
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

---

## 🧪 Testing & Linting

### Run ESLint

```bash
cd frontend
npm run lint
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Syed Visal Raza Zaidi**

---

## 📧 Support & Contact

For issues, feature requests, or general questions, please open an issue on the repository or contact the development team.

---


## 📈 Performance Optimizations

- **Vite** for fast development and optimized production builds
- **Mongoose** query optimization
- **Cloudinary** image optimization
- **React Hook Form** for minimal re-renders
- **JWT** for stateless authentication (scalable)
- **CORS** middleware for efficient request handling

---

## 🔄 Version History

- **v1.0.0** - Initial release with core blogging features

---

**Last Updated:** February 2026

---

*Built with ❤️ for the blogging community*
