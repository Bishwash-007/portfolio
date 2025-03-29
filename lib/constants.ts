export const personalDetails = {
  name: "Bishwash",
  email: "drewwbishwash@gmail.com",
  socials: {
    github: "https://github.com/Bishwash-007",
    facebook: "https://www.facebook.com/profile.php?id=61554655436723",
    instagram: "https://www.instagram.com/bishwash_007",
    Linkedin: "https://www.linkedin.com/in/bishwash-007/"
  }
};

interface Project {
  title: string;
  description: string;
  link: string;
  demo?: string;
  tech: string[];
  category: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Restate",
    description: "A modern real estate platform built with cutting-edge technologies, featuring property listings, user authentication, and advanced search functionality.",
    link: "https://github.com/Bishwash-007/Restate",
    demo: "https://restate-bishwash.vercel.app",
    tech: ["React Native", "Expo", "Appwrite"],
    category: "Mobile App",
    image: "/projects/restate.webp"
  },
  {
    title: "Rubik3D",
    description: "Interactive 3D Rubik's cube visualization and solver with realistic animations and intuitive controls.",
    link: "https://github.com/Bishwash-007/Rubik3D",
    demo: "https://rubik3d-bishwash.vercel.app",
    tech: ["Three.js", "React Native", "WebGL","PyTorch","Django"],
    category: "Mobile App 3D",
    image: "/projects/rubik3d.webp"
  },
  {
    title: "Farmbuddy",
    description: "Smart farming assistant application for modern agriculture, helping farmers optimize crop management and resource allocation.",
    link: "https://github.com/Bishwash-007/Farmbuddy",
    demo: "https://farmbuddy-bishwash.vercel.app",
    tech: ["React Native", "Django", "TensorFlow","Expo"],
    category: "Mobile App",
    image: "/projects/farmbuddy.webp"
  },
  {
    title: "SubscriptionTracker",
    description: "Track and manage all your subscriptions in one place with automated reminders and spending analytics.",
    link: "https://github.com/Bishwash-007/SubscriptionTracker",
    demo: "https://subtrack-bishwash.vercel.app",
    tech: ["Node.js", "MongoDB", "Arcjet"],
    category: "BackEnd",
    image: "/projects/subtrack.webp"
  },
  {
    title: "BookHive",
    description: "Digital library management system with advanced features for cataloging, borrowing, and tracking books.",
    link: "https://github.com/Bishwash-007/BookHive",
    demo: "https://bookhive-bishwash.vercel.app",
    tech: ["React Native", "Flask", "PostgreSQL","PyTorch"],
    category: "Mobile App",
    image: "/projects/bookhive.webp"
  }
];

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

interface Technology {
  name: string;
  icon: string;
  category: 'Frontend' | 'Mobile' | 'Backend' | 'Database' | 'AI/ML' | '3D';
}

export const technologies: Technology[] = [
  { name: "React Native", icon: "react-native.svg", category: "Mobile" },
  { name: "Expo", icon: "expo.svg", category: "Mobile" },
  { name: "Appwrite", icon: "appwrite.svg", category: "Backend" },
  { name: "Three.js", icon: "threejs.svg", category: "3D" },
  { name: "WebGL", icon: "webgl.svg", category: "3D" },
  { name: "PyTorch", icon: "pytorch.svg", category: "AI/ML" },
  { name: "Django", icon: "django.svg", category: "Backend" },
  { name: "TensorFlow", icon: "tensorflow.svg", category: "AI/ML" },
  { name: "Node.js", icon: "nodejs.svg", category: "Backend" },
  { name: "MongoDB", icon: "mongodb.svg", category: "Database" },
  { name: "Arcjet", icon: "arcjet.svg", category: "Backend" },
  { name: "Flask", icon: "flask.svg", category: "Backend" },
  { name: "PostgreSQL", icon: "postgresql.svg", category: "Database" }
];

export const techStack = [
  { name: "React", icon: "react.svg" },
  { name: "Next.js", icon: "nextjs.svg" },
  { name: "Expo", icon: "expo.svg" }
]; 

export const timelineData = [
  {
    year: "2024",
    title: "Full Stack Developer",
    content: "Working on modern web applications using Next.js, React, and TypeScript.",
    image: "/project1.jpg",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    year: "2023",
    title: "Mobile App Developer",
    content: "Developed cross-platform mobile applications using React Native and Expo.",
    image: "/project2.jpg",
    technologies: ["React Native", "Expo", "Firebase", "Redux"],
  },
  {
    year: "2022",
    title: "AI/ML Enthusiast",
    content: "Exploring machine learning projects with PyTorch and TensorFlow.",
    image: "/project3.jpg",
    technologies: ["PyTorch", "TensorFlow", "Python", "Scikit-learn"],
  },
];

export const testimonials = [
  {
    name: "John Doe",
    role: "Senior Developer",
    company: "Tech Corp",
    image: "/testimonials/john.webp",
    content: "Bishwash is an exceptional developer who delivered beyond our expectations. His attention to detail and technical expertise are outstanding.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    company: "Innovation Labs",
    image: "/testimonials/jane.webp",
    content: "Working with Bishwash was a game-changer for our project. His innovative solutions and collaborative approach made all the difference.",
    rating: 5,
  },
  {
    name: "Mike Johnson",
    role: "CTO",
    company: "StartupX",
    image: "/testimonials/mike.webp",
    content: "Bishwash's expertise in mobile development and AI integration helped us create a cutting-edge product that our users love.",
    rating: 5,
  },
  {
    name: "Sarah Wilson",
    role: "Lead Designer",
    company: "Design Studio",
    image: "/testimonials/sarah.webp",
    content: "His ability to translate complex technical requirements into elegant solutions is truly remarkable. A pleasure to work with!",
    rating: 5,
  },
  {
    name: "David Brown",
    role: "Project Manager",
    company: "Enterprise Solutions",
    image: "/testimonials/david.webp",
    content: "Bishwash consistently delivered high-quality code and maintained excellent communication throughout the project.",
    rating: 5,
  },
];