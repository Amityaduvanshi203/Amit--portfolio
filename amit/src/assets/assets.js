import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

// Project images
import aiSentimentImg from './project/ai -sentimet.png';
import aiCustomerImg from './project/aicostumar.jpg';
import nabhaImg from './project/nabha.png';
import speshImg from './project/spesh.png';
import intecImg from './project/intec.png';
import hospitalImg from './project/hospital.png';
import portfolioImg from './project/potfolio.png';
import freelancingImg from './project/frilansing.png';
import realsImg from './project/reals.png';
import railwayProjectImg from './project/relway.png';
import blindImg from './project/bilnd.png';

// Hardware images
import electresaImg from './Hadware/electresa .png';
import bluecarImg from './Hadware/blucar .png';
import dustbinImg from './Hadware/dustbin.png';
import firecarImg from './Hadware/firecar.png';
import healthcareImg from './Hadware/healthcare.png';
import homeImg from './Hadware/home.png';
import obscarImg from './Hadware/obscar.png';
import pumpImg from './Hadware/pump.png';
import railwayHardwareImg from './Hadware/relway.png';
import sanket from '../assets/Amit.jpeg';


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
    title: "Electrixa",
    description: "A student-focused technology platform for learning, hardware projects, software development, courses, kits and engineering resources.",
    image: electresaImg,
    tech: ["React", "JavaScript", "Tailwind CSS", "Node.js"],
    icons: [FaReact, FaCode, FaServer],
    code: "",
  },

  {
    title: "AI-Based Citizen Feedback Analysis",
    description: "An AI-powered system that analyzes citizen feedback using NLP and machine learning to identify issues and generate department-wise insights.",
    image: aiCustomerImg,
    tech: ["Python", "NLP", "LSTM", "Flask", "Machine Learning"],
    icons: [FaRobot, FaServer, FaDatabase],
    code: "",
  },

  {
    title: "Sentiment Analyzer",
    description: "An AI-based application that analyzes text feedback and classifies user opinions into different sentiment categories using NLP techniques.",
    image: aiSentimentImg,
    tech: ["Python", "NLP", "Flask", "VADER", "Machine Learning"],
    icons: [FaRobot, FaServer, FaDatabase],
    code: "",
  },

  {
    title: "Railway Track Safety System",
    description: "An embedded safety system designed to detect railway track problems and provide early warnings to help prevent railway accidents.",
    image: railwayProjectImg,
    tech: ["Arduino", "Embedded C", "Sensors", "IoT"],
    icons: [FaTools, FaCode],
    code: "",
  },

  {
    title: "Nabha Student Learning Platform",
    description: "A digital learning platform designed to provide rural students with educational content, learning resources and offline-friendly access.",
    image: nabhaImg,
    tech: ["React", "PWA", "JavaScript", "CSS"],
    icons: [FaReact, FaCode, FaMobileAlt],
    code: "",
  },

  {
    title: "Scroll",
    description: "A modern responsive web project focused on smooth scrolling, interactive sections and an engaging user interface experience.",
    image: realsImg,
    tech: ["React", "JavaScript", "CSS", "Framer Motion"],
    icons: [FaReact, FaCode],
    code: "",
  },

  {
    title: "Kishore Chandak",
    description: "A modern web project developed to present information and services through a responsive interface with a clean and user-friendly design.",
    image: intecImg,
    tech: ["React", "JavaScript", "CSS", "Responsive Design"],
    icons: [FaReact, FaCode],
    code: "",
  },

  {
    title: "InTech Heritage",
    description: "A heritage-focused digital platform designed to present cultural information, locations and historical content through an interactive website.",
    image: intecImg,
    tech: ["React", "JavaScript", "CSS", "Three.js"],
    icons: [FaReact, FaCode],
    code: "",
  },

  {
    title: "Hospital Management System",
    description: "A web-based hospital management solution designed to manage patients, doctors, appointments and essential healthcare information efficiently.",
    image: hospitalImg,
    tech: ["React", "Node.js", "Express.js", "Database"],
    icons: [FaReact, FaServer, FaDatabase],
    code: "",
  },

  {
    title: "SpaceWorld",
    description: "An educational website that helps students explore the solar system, planets, astronauts and space missions through interactive content.",
    image: speshImg,
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    icons: [FaCode, FaMobileAlt],
    code: "",
  },

  {
    title: "Amit Portfolio",
    description: "A responsive personal portfolio website showcasing my technical skills, projects, experience, achievements and professional journey.",
    image: portfolioImg,
    tech: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
    icons: [FaReact, FaCode],
    code: "",
  },

  {
    title: "Freelancing Platform",
    description: "A web platform designed for freelancers and clients with features for authentication, project listings, searching and user interactions.",
    image: freelancingImg,
    tech: ["React", "Vite", "Express.js", "SQLite", "Tailwind CSS"],
    icons: [FaReact, FaServer, FaDatabase],
    code: "",
  },

  {
    title: "Bluetooth Control Car",
    description: "A Bluetooth-controlled robotic car that receives commands from a mobile device and controls the movement of the vehicle wirelessly.",
    image: bluecarImg,
    tech: ["Arduino", "Bluetooth", "Embedded C", "Motor Driver"],
    icons: [FaTools, FaCode],
    code: "",
  },

  {
    title: "Obstacle Avoidance Car",
    description: "An autonomous robotic car that detects obstacles using sensors and automatically changes its direction to avoid collisions.",
    image: obscarImg,
    tech: ["Arduino", "Ultrasonic Sensor", "Embedded C", "Motor Driver"],
    icons: [FaTools, FaCode],
    code: "",
  },

  {
    title: "Fire Fighting Car",
    description: "An autonomous robotic vehicle designed to detect fire and move toward the affected area to perform basic fire extinguishing operations.",
    image: firecarImg,
    tech: ["Arduino", "Flame Sensor", "Embedded C", "Water Pump"],
    icons: [FaTools, FaCode],
    code: "",
  },

  {
    title: "Health Care Monitoring System using ESP32",
    description: "An IoT-based healthcare monitoring system that collects health parameters using sensors and provides real-time monitoring through ESP32.",
    image: healthcareImg,
    tech: ["ESP32", "IoT", "Sensors", "Embedded C"],
    icons: [FaTools, FaCloud, FaDatabase],
    code: "",
  },

  {
    title: "Smart Dustbin",
    description: "An automated smart dustbin that uses sensors to detect nearby objects and open the lid automatically for touch-free waste disposal.",
    image: dustbinImg,
    tech: ["Arduino", "Ultrasonic Sensor", "Servo Motor", "Embedded C"],
    icons: [FaTools, FaCode],
    code: "",
  },

  {
    title: "Smart Water Pump for Agriculture",
    description: "An automated agricultural irrigation system that monitors soil conditions and controls the water pump to improve water usage efficiency.",
    image: pumpImg,
    tech: ["Arduino", "Soil Moisture Sensor", "Relay", "Embedded C"],
    icons: [FaTools, FaCloud],
    code: "",
  },

  {
    title: "Smart Blind Stick",
    description: "An assistive smart stick that uses sensors to detect obstacles and provide alerts to help visually impaired users navigate safely.",
    image: blindImg,
    tech: ["Arduino", "Ultrasonic Sensor", "Buzzer", "Embedded C"],
    icons: [FaTools, FaCode],
    code: "",
  },

  {
    title: "Railway Accident Prevention System",
    description: "An embedded railway safety solution designed to detect dangerous conditions and provide warnings to reduce the possibility of railway accidents.",
    image: railwayHardwareImg,
    tech: ["Arduino", "Sensors", "Embedded C", "IoT"],
    icons: [FaTools, FaCloud],
    code: "",
  },

  {
    title: "Smart Home",
    description: "An IoT-based smart home system that enables automated monitoring and control of household appliances using sensors and connected devices.",
    image: homeImg,
    tech: ["Arduino", "ESP32", "IoT", "Sensors", "Embedded C"],
    icons: [FaTools, FaCloud],
    code: "",
  },

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