import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    logo2,
    logo3,
   logo1,
    bootstrap2,
    project1,
    project2,
    project4,
    project5,
    solidity,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "MERN Developer",
      icon: web,
    },
    {
      title: "BlockChain Developer",
      icon: mobile,
    },
    {
      title: "Document Specialist",
      icon: creator ,
    }, 
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap2,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Solidity",
      icon: solidity,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    
    {
      name: "git",
      icon: git,
    },
  
  ];
  
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company_name: "Micrologix",
      icon: logo1,
      iconBg: "#E6DEDD",
      date: "July 2022 - Jan 2023",
      points: [
        "Implement responsive and visually appealing user interfaces based on design mockups and wireframes.",
        "Write HTML, CSS, and JavaScript code to create web pages and UI components.",
        "Work closely with UI/UX designers to understand design requirements and implement design elements accurately.",
        "Implement responsive design principles to ensure a consistent and optimal user experience on various devices, including desktops, tablets, and mobile phones.",
      ],
    },
    {
      title: "Web Developer Intern(Backend)",
      company_name: "Optimum Tech",
      icon: logo2,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - June 2023",
      points: [
        "Develop server-side logic to handle requests from the frontend.",
        "Design and manage databases, including creating and optimizing queries.",
        "Use version control systems (e.g., Git) to manage and track changes in the codebase.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "BlokChain Developer Inten",
      company_name: "Invictus Solutions",
      icon: logo3,
      iconBg: "#383E56",
      date: "Aug 2023 - Present",
      points: [
        "Design, develop, and implement decentralized applications (dApps) on blockchain platforms.",
        "Code, deploy, and manage smart contracts that run on blockchain platforms. ",
        "Develop user interfaces using React.js for building interactive and responsive web applications.",
        "Design and implement server-side logic using Node.js and Express.js.",
        "Integrate deployed smart contracts instances with the existing front-ends to make reliable and efficient DAPPS.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "De Trust",
      description:
      "De Trust is a website to post reviews on registered businesses and your review will be converted into an image NFT that will be stored on Mumbai Polygon Blockchain . Other users can buy, comment, upvote or downvote your NFT",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Solidity",
          color: "green-text-gradient",
        },
        {
          name: "Mumbai Polygon Testnet",
          color: "pink-text-gradient",
        },
      ],
      image: project1,
      source_code_link: "https://github.com/faizi040/De-Trust",
    },
    {
      name: "UZSocial",
      description:
        "A Social media web Platform containing functionalities of login, signup, add post , like post and user profile page"
        ,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDb",
          color: "green-text-gradient",
        },
        {
          name: "Node Js/Express Js",
          color: "pink-text-gradient",
        },
      ],
      image: project2,
      source_code_link: "https://github.com/faizi040/UZSocial",
    },
    {
      name: "HelpAcre",
      description:
        " A donations website to enhance Agriculture sector growth and power by providing them with latest Machinery, tools and agriculture techniques",
      tags: [
        {
          name: "BootStrap",
          color: "blue-text-gradient",
        },
        {
          name: "MySql",
          color: "green-text-gradient",
        },
        {
          name: "PHP Laravel",
          color: "pink-text-gradient",
        },
      ],
      image: project4,
      source_code_link: "https://github.com/faizi040/iNoteBook",
    },
    {
      name: "3D Portfolio",
      description:
        " No need to explain this one",
      tags: [
        {
          name: "Tailwind Css",
          color: "blue-text-gradient",
        },
        {
          name: "React Js",
          color: "green-text-gradient",
        },
        {
          name: "Three Js",
          color: "pink-text-gradient",
        },
      ],
      image: project5,
      source_code_link: "https://github.com/faizi040/3D_Portfolio",
    },
  ];
  
  export {services, technologies, experiences, testimonials, projects };