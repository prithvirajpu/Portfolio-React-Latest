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
    live: "https://shopkickora.shop",
  },
  // ... (rest of your projects)
  {
    title: "TicketFlow",
    subtitle: "Real-Time Support System",
    description: "Live ticket management platform with WebSocket-powered chat, agent routing, and automated task handling via Celery.",
    tech: ["Django", "React", "WebSockets", "Redis", "Celery"],
    features: ["Real-time chat (WebSockets)", "Agent assignment workflows", "Background tasks via Celery", "Role-based access control"],
    color: "#8b5cf6",
    icon: "⚡",
    image: "/images/ticketflow.png",
    github: "https://github.com/prithvirajpu",
    live: "https://ticketflow.shop",
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
  { skill: "Django & MVT Architecture", detail: "Backend web development with clean MVC separation, URL routing, and middleware.", year: "2024" },
  { skill: "PostgreSQL & Django ORM", detail: "Relational database design, complex queries, optimization and indexing.", year: "2024" },
  { skill: "Authentication Systems", detail: "OTP verification, session-based auth, token auth, role-based access control.", year: "2024" },
  { skill: "React & Modern Frontend", detail: "Component-based UI, hooks, Redux state management, responsive design.", year: "2025" },
  { skill: "REST APIs & DRF", detail: "RESTful API design, serializers, viewsets, JWT and session authentication.", year: "2025" },
  { skill: "WebSockets & Real-Time", detail: "Django Channels for bidirectional communication, live chat features.", year: "2026" },
  { skill: "Celery & Redis", detail: "Distributed task queues, background job processing, caching strategies.", year: "2026" },
];