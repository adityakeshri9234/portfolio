import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Aditya',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Keshri',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '22 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

//   {
//     id: 5,
//     title: 'Freelance : ',
//     description: 'Available',
//   },

  {
    id: 6,
    title: 'Address : ',
    description: 'Ranchi, Jharkhand',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+91 9031474184',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'adityakeshri9234@mail.com',
  },

//   {
//     id: 9,
//     title: 'LinkedIn : ',
//     description: 'https://www.linkedin.com/in/aditya-keshri-61b7b924a/',
//   },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Hindi, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '660+',
    title: 'DSA Problems <br /> Solved',
  },

  {
    id: 2,
    no: '12+',
    title: 'Projects <br /> Completed',
  },

//   {
//     id: 3,
//     no: '81+',
//     title: 'Happy <br /> Customers',
//   },

//   {
//     id: 4,
//     no: '53+',
//     title: ' Awards <br /> Won',
//   },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'May,2024 - June,2024',
    title: 'Research Intern<span> BIT Mesra </span>',
    desc: 'Topic: Deepfake Detection Model',
  },

//   {
//     id: 2,
//     category: 'experience',
//     icon: <FaBriefcase />,
//     year: '2013 - 2018',
//     title: 'UI/UX Designer <span> Themeforest </span>',
//     desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
//   },

//   {
//     id: 3,
//     category: 'experience',
//     icon: <FaBriefcase />,
//     year: '2005 - 2013',
//     title: 'Consultant <span> Videohive </span>',
//     desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
//   },

  {
    id: 2,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021 - PRESENT',
    title: 'Bachelor of Technology in Computer Science and Technology <span> Birla Institute of Technology, Mesra </span>',
    desc: 'CGPA: 8.67',
  },

  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021',
    title: '12th Boards (CBSE) <span> Sarala Birla Public School </span>',
    desc: 'Percentage: 93.33%',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019',
    title: '10th Boards (ICSE) <span> Bishop Hartmann Academy </span>',
    desc: 'Percentage: 91%',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '40',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '60',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '65',
  },

  {
    id: 4,
    title: 'MongoDB',
    percentage: '50',
  },

  {
    id: 5,
    title: 'Express.js',
    percentage: '45',
  },

  {
    id: 6,
    title: 'MySQL',
    percentage: '60',
  },

  {
    id: 7,
    title: 'C++',
    percentage: '90',
  },

  {
    id: 8,
    title: 'React',
    percentage: '50',
  },
  {
    id: 9,
    title: 'Python',
    percentage: '45',
  },
  {
    id: 10,
    title: 'Java',
    percentage: '60',
  },

];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'MERN Stack',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project :',
        desc: 'Food-Express',
      },
    //   {
    //     icon: <FiUser />,
    //     title: 'Client : ',
    //     desc: 'None',
    //   },
    //   {
    //     icon: <FaCode />,
    //     title: 'Language : ',
    //     desc: 'Adobe Photoshop',
    //   },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://food-express-frontend.onrender.com/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Machine Learning',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Deep fake Detection Model',
      },
    //   {
    //     icon: <FiUser />,
    //     title: 'Client : ',
    //     desc: 'Dribble',
    //   },
    //   {
    //     icon: <FaCode />,
    //     title: 'Language : ',
    //     desc: 'React JS',
    //   },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/adityakeshri9234/DeepfakeDetection',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Frontend',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Weather App',
      },
    //   {
    //     icon: <FiUser />,
    //     title: 'Client : ',
    //     desc: 'Dribble',
    //   },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React  JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://weather-app-react-b1ma.onrender.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Web Development',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Translate-Anuvad',
      },
    //   {
    //     icon: <FiUser />,
    //     title: 'Client : ',
    //     desc: 'Dribble',
    //   },
    //   {
    //     icon: <FaCode />,
    //     title: 'Language : ',
    //     desc: 'Adobe Premium',
    //   },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://adityakeshri9234.github.io/Anuvad-Translate/',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Machine Learning',
    details: [
      {
        title: 'Project : ',
        desc: 'Face Recognizer',
      },
    //   {
    //     title: 'Client : ',
    //     desc: 'Dribble',
    //   },
    //   {
    //     title: 'Language : ',
    //     desc: 'React JS, Node JS',
    //   },
      {
        title: 'Preview : ',
        desc: 'https://github.com/adityakeshri9234/facedetection_',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Web development',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Snake Wars',
      },
    //   {
    //     icon: <FiUser />,
    //     title: 'Client : ',
    //     desc: 'Dribble',
    //   },
    //   {
    //     icon: <FaCode />,
    //     title: 'Language : ',
    //     desc: 'Adobe Photoshop',
    //   },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://adityakeshri9234.github.io/Snakewars.github.io/',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
