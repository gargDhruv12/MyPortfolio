export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [

        {
      title: 'MyOrigin-Personalized Career Intelligence Platform',
      desc: 'A smart career growth platform that empowers users with data-driven insights. It provides automated weekly updates, real-time industry analytics, and skill trend tracking to guide better career decisions.',
      subdesc: 'Designed with React, ShadCN, Clerk, and Gemini API, MyOrigin includes a customizable resume builder with AI-assisted editing, auto-generated cover letters, and an interactive interview prep dashboard featuring quizzes and progress visualization.',
        
      href: 'https://my-origin.vercel.app/',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/javascript-logo.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    
    {
      title: 'CINEMATE - Intelligent Movie Recommender',
      desc: 'CINEMATE is an advanced movie recommendation system that personalizes suggestions using machine learning techniques like content-based and collaborative filtering. It dynamically adapts to user preferences, factoring in sentiment analysis, environmental context, and real-time interactions to enhance recommendations.',
      subdesc:
        'Built with Python, Pandas, NumPy, and Scikit-learn, CINEMATE offers an intuitive way to explore movies, maintain a personalized watchlist, and discover films more intelligently.',
      href: 'https://github.com/gargDhruv12/DataDeviants',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/javascript-logo.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'FinanceBuddy – Smart Expense Tracker',
      desc: 'FinanceBuddy is an advanced financial management platform designed to simplify expense tracking and investment planning. It centralizes multiple bank accounts, automates income distribution for taxes and savings, and provides real-time transaction handling with fraud detection alerts.',
      subdesc:
        'Powered by JavaScript, Node.js, React, MongoDB, and AI, FinanceBuddy integrates secure payment gateways and an AI-driven chatbot for personalized financial insights, making money management smarter and more efficient.',
      href: 'https://github.com/gargDhruv12/FinanceBuddy',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/javascript-logo.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },

    {
      title: 'SumItUp-AnAI-PoweredChromeExtension',
      desc: 'A productivity-focused browser extension that automatically summarizes articles, documents, and study materials for efficient learning and reading.',
      subdesc:
        'Built using Manifest V3, JavaScript, HTML, CSS, and Gemini API, it offers three flexible summary modes — Brief, Detailed, and Bullet Points — along with an intuitive onboarding flow for smooth first-time setup.',
      href: 'https://github.com/gargDhruv12/AI-summarizer',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/javascript-logo.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },

    {
      title: 'NoteMate-Secure MERNNoteMakingApp',
      desc: 'A full-stack application that helps users securely create, manage, and organize their notes across multiple categories and personal goals',
      subdesc:
        'Developed using React.js, Node.js, Express, MongoDB, JWT Authentication, and Tailwind CSS, NoteMate ensures protected access with JWT-based authentication, plus search and category-wise filtering for better note management.',
      href: 'https://inotebook-pi-eight.vercel.app/',
      texture: '/textures/project/project5.mp4',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/javascript-logo.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [6, 4, 0] : isTablet ? [8, 4, 0] : [12, 4, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-12, 10, 0] : isTablet ? [-17, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Social Summer of Code',
      pos: 'Open Source Contributor',
      duration: 'June 2024- August 2024',
      title: "Developed features using React and Node.js, enhancing app efficiency. Improved reliability by writing unit tests with Jest, achieving 95% test coverage. Resolved API issues in Express, ensuring smooth and error-free deployments.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Social Winter of Code',
      pos: 'Open Source Contributor',
      duration: 'January 2025- Present',
      title: "Fixed UI bugs and developed components using HTML, CSS, and JavaScript. Optimized backend logic in Node.js to enhance API performance and scalability. Created test cases to validate REST APIs, ensuring system reliability.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Hackathons',
      pos: 'Web Developer',
      duration: '',
      title: "Worked on projects with React, TailwindCSS, and Framer Motion. Developed and deployed apps using Vite, Vercel, and GitHub. Participated in hackathons and contributed to open source projects.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];