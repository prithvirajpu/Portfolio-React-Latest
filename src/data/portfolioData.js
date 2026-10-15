export const NAV_LINKS = ["About", "Skills", "Projects", "Journey", "Contact"];

export const SKILLS = {
  Backend: ["Python", "Django", "Django REST Framework", "REST APIs", "WebSockets", "Celery", "Redis", "Authentication"],
  Frontend: ["React", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3", "Redux"],
  Database: ["PostgreSQL", "SQLite", "Django ORM", "Database Design"],
  Tools: ["Git", "GitHub", "Postman", "VS Code", "Firebase", "Vite"],
};

export const PROJECTS = [
  {
    title: "ShopKickora",
    subtitle: "E-Commerce Platform",
    description: "Full-featured e-commerce platform with separate user and admin panels, real-time inventory, and seamless checkout flows.",
    tech: ["Django", "React", "PostgreSQL", "DRF"],
    features: ["Auth & OTP verification", "Cart, Wishlist & Wallet", "Offers & Coupons engine", "Admin dashboard"],
    color: "#3b82f6",
    icon: "🛍",
    image: "/images/shopkickora.png",
    github: "https://github.com/prithvirajpu",
    live: "https://shopkickora.prithvirajpu.online",
  },
  // ... (rest of your projects)
  {
    title: "TRS ",
    subtitle: "Real-Time Support System",
    description: "Live ticket management platform with WebSocket-powered chat, agent routing, and automated task handling via Celery.",
    tech: ["Django", "React", "WebSockets", "Redis", "Celery"],
    features: ["Real-time chat (WebSockets)", "Agent assignment workflows", "Background tasks via Celery", "Role-based access control"],
    color: "#8b5cf6",
    icon: "⚡",
    image: "/images/ticketflow.png",
    github: "https://github.com/prithvirajpu",
    live: "https://trs.prithvirajpu.online",
  },
  {
    title: "Task Management System ",
    subtitle: "ToDo Application",
    description: "Normal Task management application with Django REST Framework, React in Clean architecture",
    tech: ["Django", "React","PostgreSQL"],
    features: ["Task management"],
    color: "#8b5cf6",
    icon: "⚡",
    image: "/images/bmone.png",
    github: "https://github.com/prithvirajpu",
    live: "https://bmone.vercel.app",
  },
  {
    title: "OLX Clone",
    subtitle: "Marketplace Application",
    description: "Responsive second-hand marketplace with Firebase backend, real-time listings, and modern React component architecture.",
    tech: ["React", "Firebase", "Redux", "Tailwind CSS"],
    features: ["Firebase authentication", "Product listings & uploads", "Redux state management", "Dynamic routing"],
    color: "#10b981",
    icon: "🏪",
    image: "/images/olxclone.png",
    github: "https://github.com/prithvirajpu",
    live: "#",
  },
  {
    title: "Netflix Clone",
    subtitle: "Streaming Platform UI",
    description: "Netflix-inspired streaming interface with protected routes, dynamic content browsing, and responsive design.",
    tech: ["React", "Firebase", "Redux"],
    features: ["User auth & protected routes", "Dynamic movie browsing", "Redux state management", "Responsive UI"],
    color: "#ef4444",
    icon: "🎬",
    image: "/images/netflixclone.png",
    github: "https://github.com/prithvirajpu",
    live: "#",
  },
];

export const JOURNEY = [
  { 
    skill: "Django & MVT Architecture", 
    detail: "Core backend development, URL routing, custom middleware, and modular project design.", 
    year: "2024" 
  },
  { 
    skill: "PostgreSQL & Django ORM", 
    detail: "Relational schema design, query optimization (select_related/prefetch_related), and database indexing.", 
    year: "2024" 
  },
  { 
    skill: "Authentication & Security", 
    detail: "OTP verification, session & JWT authentication, and role-based access control (RBAC).", 
    year: "2024" 
  },
  { 
    skill: "React & Modern Frontend", 
    detail: "Component-driven UIs, custom hooks, Redux Toolkit state management, and responsive styling.", 
    year: "2025" 
  },
  { 
    skill: "REST APIs & DRF", 
    detail: "RESTful API engineering, serializers, ViewSets, and secure token-based authentication.", 
    year: "2025" 
  },
  { 
    skill: "WebSockets & Real-Time Communications", 
    detail: "Django Channels for bidirectional WebSocket messaging, live notifications, and real-time features.", 
    year: "2026" 
  },
  { 
    skill: "Celery & Redis Integration", 
    detail: "Asynchronous task queues, scheduled cron jobs (Celery Beat), and in-memory caching strategies.", 
    year: "2026" 
  },
  { 
    skill: "Clean Architecture & DDD", 
    detail: "Domain-Driven Design, decoupled service layers, and scalable system architecture for enterprise apps.", 
    year: "2026" 
  },
];