import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import projectImg1 from '../assets/image-1.jpg';
import projectImg2 from '../assets/image-2.jpg';
import projectImg3 from '../assets/image-3.jpeg';
import projectImg4 from '../assets/image-4.webp';
import projectImg5 from '../assets/image-5.jpg';
import projectImg6 from '../assets/image-6.jpeg';
import sanket from '../assets/sanket.jpeg';


export const assets = {
    sanket
}

export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'Flask']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL']
  },
  {
    title: 'Machine Learning & AI',
    icon: FaRobot,
    description: 'Building intelligent applications using machine learning and artificial intelligence.',
    tags: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'Kubernetes']
  },
  {
    title: 'Tools & Programming Languages',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Webpack', 'Figma', 'Java', 'Python', 'C']
  }
];



export const projects = [
  {
    title: "AI in Personalized Learning",
    description: "Built an AI-driven quiz platform that analyzes student performance and predicts future scores using Scikit-Learn, with Flask backend and HTML, CSS, JavaScript frontend.",
    image: projectImg1,
    tech: ["Python", "Scikit-Learn", "Flask", "HTML/CSS/JS"],
    icons: [FaRobot, FaServer, FaDatabase , FaStripe],
    code: "https://github.com/sanket-hanchate/ai-student-performance-tracker.git",
  },  
  {
    title: "Freelancing Platform",
    description: "Designed and developed a freelancing portal featuring user auth, project listing, searching, and visit tracking using React (Vite) on the frontend and Express + SQLite on the backend.",
    image: projectImg2,
    tech: ["React (Vite)", "Express", "SQLite", "Tailwind CSS"],
    icons: [FaReact, FaServer, FaDatabase , FaTools],
    code: "https://github.com/sanket-hanchate/freelancing-platform.git",
  },
  {
    title: "Smart Health Care System",
    description: "Built an AI-powered Smart Healthcare System using Python, Flask, and Machine Learning models to predict wellness from sleep, stress, heart rate, and calorie intake. Designed for early lifestyle assessment in chronic conditions like Thalassemia, promoting proactive digital healthcare.",
    image: projectImg3,
    tech: ["Python", "Flask", "Machine Learning", "Tailwind CSS"],
    icons: [FaRobot, FaServer, FaDatabase],
    code: "https://github.com/sanket-hanchate/thalassemia-healthcare.git",
  },
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio website built with React.js and Tailwind CSS to showcase my projects, skills, and blogs. Features smooth animations using Framer Motion and supports dynamic content rendering with Markdown, along with a modern dark/light mode UI.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    code: "",
  },
  {
    title: "SpaceWorld – Educational Space Website",
    description: "SpaceWorld is a responsive static website built to help school students learn about space in a simple and interactive way. The platform includes sections on the solar system, Indian space missions, astronauts, and planet details.",
    image: projectImg5,
    tech: ["HTML5", "CSS", "BootStrap", "Javascript"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    code: "https://github.com/sanket-hanchate/SpaceWorld.git",
  },
  {
    title: "Context-Aware Policy Intelligence System",
    description: "An AI-powered web application that detects semantic changes in policy PDFs using a custom-trained NLP model and generates real-time, confidence-based alerts for agents.",
    image: projectImg6,
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "pdf-parse", "TF-IDF", "Logistic Regression"],
    icons: [FaRobot, FaReact, FaCloud],
    code: "https://github.com/sanket-hanchate/policy-intelligence-system.git",
  }
];


export const workData = [
  {
    role: "Data Analyst",
    company: "Skillified Mentor",
    duration: "2025",
    description:
      "Analyzed bank marketing data using Python (Pandas, NumPy, Matplotlib) to identify key factors influencing customer term deposit decisions. Built and evaluated predictive ML models to enhance campaign success insights and support data-driven marketing strategies.",
    color: "purple"
  },
];
