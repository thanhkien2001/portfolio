/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};
// Summary And Greeting Section


const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Chế Thanh Kiên",
  title: "Hi all, I'm Kien",
  subTitle: emoji(
    "A passionate Fullstack Developer 🚀 with 2+ years of experience in Web/Mobile App development and RESTful APIs. Successfully built and maintained large-scale Production systems (Fintech, E-commerce, Blockchain). Proficient in SDLC, CI/CD, and highly effective in international Agile environments. Passionate about Clean Architecture, performance optimization, and writing highly maintainable code."
  ),
  resumeLink: "/Che_Thanh_Kien_Fullstack_Developer_EN.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/thanhkien2001",
  gmail: "thanhkien2021008@gmail.com",
  // Instagram, Twitter, Linkedin and Kaggle are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FULLSTACK DEVELOPER SPECIALIZING IN SCALABLE WEB APIS, CLEAN ARCHITECTURE & HIGH PERFORMANCE",
  skills: [
    emoji(
      "⚡ Develop responsive, performant Front-end & User Interfaces using Vue 3, React, TailwindCSS, and SCSS"
    ),
    emoji(
      "⚡ Architect and build robust backend RESTful APIs with PHP (Laravel), NodeJS, and Clean Architecture"
    ),
    emoji(
      "⚡ High-performance database design, caching & full-text search with MySQL, MongoDB, Redis, and Elasticsearch"
    ),
    emoji(
      "⚡ Enterprise multi-tenancy & multisite architecture, CI/CD pipelines, Docker containerization, and Nginx/Linux DevOps"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Vue 3",
      fontAwesomeClassname: "devicon-vuejs-plain colored"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "devicon-react-original colored"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "devicon-javascript-plain colored"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "devicon-php-plain colored"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "devicon-laravel-original colored"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "devicon-nodejs-plain colored"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "devicon-mysql-plain colored"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "devicon-mongodb-plain colored"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "devicon-redis-plain colored"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "devicon-docker-plain colored"
    },
    {
      skillName: "Nginx",
      fontAwesomeClassname: "devicon-nginx-original colored"
    },
    {
      skillName: "Cloudflare",
      fontAwesomeClassname: "devicon-cloudflare-plain colored"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "devicon-linux-plain colored"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "devicon-git-plain colored"
    },
    {
      skillName: "TailwindCSS",
      fontAwesomeClassname: "devicon-tailwindcss-original colored"
    },
    {
      skillName: "SCSS",
      fontAwesomeClassname: "devicon-sass-original colored"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Can Tho University (CTU)",
      logo: require("./assets/images/ctuLogo.png"),
      subHeader: "Bachelor of Information Technology (Kỹ sư CNTT)",
      duration: "August 2019 - June 2024",
      desc: "Graduated with a Bachelor's Degree in Information Technology. Solid foundation in software engineering, system architecture, database design, telecommunications, and clean code practices.",
      descBullets: [
        "Specialized in Software Engineering & Application Development",
        "English B1 Certificate (2022) & TOEIC 600 (May 2023)"
      ]
    }
  ]
};

// Your top proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set to true to show Proficiency Section
  title: "Core Proficiency",
  subtitle: "SPECIALIZED DOMAINS & PRODUCTION EXPERTISE",
  domains: [
    {
      title: "Backend Engineering",
      role: "Architecture & RESTful APIs",
      level: "Core Strength",
      icon: "fas fa-server",
      color: "indigo",
      desc: "Architecting resilient RESTful APIs, Clean Architecture, enterprise multisite systems, multi-tenancy, and high-performance server logic.",
      skills: ["PHP", "Laravel", "NodeJS", "RESTful API", "Clean Architecture"]
    },
    {
      title: "Frontend Engineering",
      role: "Reactive UI & SPAs",
      level: "Modern UI",
      icon: "fas fa-laptop-code",
      color: "cyan",
      desc: "Building reactive, high-performance SPAs and interfaces with modern state management, responsive styling, and animations.",
      skills: ["Vue 3", "React", "TailwindCSS", "SCSS", "JavaScript ES6+"]
    },
    {
      title: "Database & Caching",
      role: "Storage & Query Optimization",
      level: "High Speed",
      icon: "fas fa-database",
      color: "amber",
      desc: "Relational and NoSQL schemas, database indexing, query fine-tuning, Redis caching layers, and Elasticsearch retrieval.",
      skills: ["MySQL", "MongoDB", "Redis", "Elasticsearch", "Query Tuning"]
    },
    {
      title: "DevOps & Infrastructure",
      role: "Containerization & Cloud",
      level: "Production Ready",
      icon: "fas fa-cloud",
      color: "emerald",
      desc: "Docker containerization, Nginx reverse proxy, Cloudflare CDN/security, Linux server administration, and Git workflows.",
      skills: ["Docker", "Nginx", "Cloudflare", "Linux", "Git"]
    }
  ],
  experience: [
    {
      Stack: "Backend (PHP, Laravel, NodeJS, RESTful API)",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend (Vue 3, React, TailwindCSS, SCSS)",
      progressPercentage: "85%"
    },
    {
      Stack: "Database & Cache (MySQL, MongoDB, Redis, Elasticsearch)",
      progressPercentage: "85%"
    },
    {
      Stack: "DevOps & Cloud (Docker, Nginx, Cloudflare, Linux, Git)",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Fullstack Developer & DevOps Engineer",
      company: "CÔNG TY TNHH VISUAL WEBER",
      companylogo: require("./assets/images/visualWeberLogo.png"),
      date: "July 2024 – Present · 2+ years",
      desc: "Designed system architecture, built backend APIs, and developed frontend for enterprise software products (Fintech, E-commerce, Healthcare).",
      descBullets: [
        "Worked directly with clients to gather requirements, analyze business logic, and propose suitable technical solutions for projects.",
        "Engineered scalable RESTful APIs, optimized database queries, and implemented caching mechanisms.",
        "Set up Docker environments, Nginx reverse proxy, and CI/CD pipelines ensuring high availability, security, and performance."
      ]
    },
    {
      role: "C/C++ & Telecom, Networking Intern",
      company: "TMA Solutions Binh Dinh",
      companylogo: require("./assets/images/tmaLogo.png"),
      date: "June 2023 – October 2023",
      desc: "Internship in telecommunication systems and low-level software engineering.",
      descBullets: [
        "Researched and familiarized with telecommunication network protocols.",
        "Participated in bug fixing and supported the development of software modules in C/C++ under mentorship."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Highlighted Projects",
  subtitle: "KEY ENTERPRISE & PRODUCTION SYSTEMS ARCHITECTED AND DELIVERED",
  projects: [
    {
      image: require("./assets/images/thacoLogo.png"),
      projectName: "Thaco Auto Multi-Brand",
      role: "Enterprise Multisite & High-Traffic Architecture",
      projectDesc:
        "Developed and maintained an enterprise website system for THACO AUTO. Implemented a multisite architecture combined with Laravel Tenancy for synchronized data management across dozens of regional dealerships. Optimized Redis cache and fine-tuned database queries for fast response times and high stability under heavy B2B load.",
      techStack: ["PHP", "Vue 3", "MySQL", "Redis", "Docker", "Laravel Tenancy"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://thacoautotphcm.vn"
        }
      ]
    },
    {
      image: require("./assets/images/pkhlLogo.png"),
      projectName: "PKHL (Hong Linh Clinic)",
      role: "Internal Hospital & Clinic ERP System",
      projectDesc:
        "Designed and developed comprehensive internal management software for the clinic. Digitized workflows including patient records, appointments, billing, inventory, and medical reporting. Leveraged Elasticsearch to enhance large-scale data retrieval speed and implemented strict multi-role security authorization.",
      techStack: ["Laravel", "Vue 3", "Elasticsearch", "Docker", "RESTful API"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://tieuhoaganhonglinh.vn"
        }
      ]
    },
    {
      image: require("./assets/images/pullvnLogo.png"),
      projectName: "PULLVN CRM",
      role: "Omnichannel Lead & Customer Automation",
      projectDesc:
        "Developed a multi-channel CRM platform to automate lead capture and management from Facebook, Zalo, TikTok, Google Ads, and WebForms. Deeply integrated APIs with partner CRM/CMS systems, providing centralized conversations, detailed role-based access control, and automated customer care workflows.",
      techStack: ["Vue 3", "Laravel", "Docker", "Redis", "RESTful API"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://apps.pull.vn"
        }
      ]
    },
    {
      image: require("./assets/images/elevatorLogo.png"),
      projectName: "Online Elevator Platform",
      role: "Multi-Vendor B2B/B2C Marketplace",
      projectDesc:
        "Specialized Multi-Vendor e-commerce platform for the elevator industry. Enables diverse vendors to list products, components, and services with a smart automated quoting mechanism, optimizing connections and transactions between businesses and clients.",
      techStack: ["Vue 3", "Laravel", "Redis", "MultiVendor"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://vietnamelevatorexpo.com/"
        }
      ]
    },
    {
      image: require("./assets/images/tonGameLogo.png"),
      projectName: "TON Blockchain NFT Game",
      role: "Web3 Gaming & Smart Contract",
      projectDesc:
        "Participated in developing an NFT Game project on the TON Blockchain. Programmed and integrated Smart Contracts, and built an interactive user interface (frontend) ensuring a smooth gaming experience and secure Web3 wallet connections.",
      techStack: ["TON Blockchain", "Node.js", "React", "Smart Contract"],
      footerLink: [
        {
          name: "GitHub / Web3",
          url: "https://github.com/thanhkien2001"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Academic Degrees, Languages and Professional Credentials",

  achievementsCards: [
    {
      title: "TOEIC 600",
      subtitle:
        "Achieved TOEIC Score 600 (issued 05/2023), confirming effective working proficiency and technical communication in international Agile environments.",
      image: require("./assets/images/toeicLogo.png"),
      imageAlt: "TOEIC 600 Certificate",
      footerLink: [
        {
          name: "Score 600 (05/2023)",
          url: ""
        }
      ]
    },
    {
      title: "English B1 Certificate",
      subtitle:
        "Certified English Level B1 (issued 2022) according to the CEFR framework.",
      image: require("./assets/images/englishB1Logo.png"),
      imageAlt: "English B1 Certificate",
      footerLink: [
        {
          name: "Certified (2022)",
          url: ""
        }
      ]
    },
    {
      title: "Bachelor of Information Technology",
      subtitle:
        "Graduated from Can Tho University (CTU) with Bachelor's Degree in Information Technology (Kỹ sư Công Nghệ Thông Tin) (2019 - 2024).",
      image: require("./assets/images/ctuLogo.png"),
      imageAlt: "Can Tho University Degree",
      footerLink: [
        {
          name: "Can Tho University",
          url: "https://www.ctu.edu.vn"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section (Hidden - not in CV)

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Set false to hide this section
};

// Talks Sections (Hidden - not in CV)

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),
  talks: [],
  display: false // Set false to hide this section
};

// Podcast Section (Hidden - not in CV)

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false // Set false to hide this section
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project, full-time opportunity, or just want to say hi? My inbox is always open!",
  number: "(+84) 395 004 764",
  email_address: "thanhkien2021008@gmail.com"
};

// Twitter Section (Hidden - not in CV)

const twitterDetails = {
  userName: "",
  display: false // Set false to hide this section
};

const isHireable = true; // Open for opportunities: Yes in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
