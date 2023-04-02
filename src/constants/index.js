import {
  logo,
  backend,
  mobile,
  web,
  menu,
  close,
  css,
  git,
  html,
  javascript,
  mern,  
  redux,
  cplusplus,
  java,
  sql,
  teamWork,
  curious,
  timeManagement,
  adaptable,
  zuora,
  chubb
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About"
  },
  {
    id: "work",
    title: "Work"
  },
  {
    id: "contact",
    title: "Contact"
  }
];

const services = [
  {
    title: "Software Developer",
    icon: mobile
  },
  {
    title: "Web Developer",
    icon: web
  },
  {
    title: "Backend Developer",
    icon: backend
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html
  },
  {
    name: "CSS 3",
    icon: css
  },
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "Redux Toolkit",
    icon: redux
  },
  {
    name: "M.E.R.N Stack",
    icon: mern
  },
  {
    name: "git",
    icon: git
  },
  {
    name: "C++",
    icon: cplusplus
  },
  {
    name: "Core Java",
    icon: java
  },
  {
    name: "MySQL",
    icon: sql
  },
  {
    name: "Team Work",
    icon: teamWork
  },
  {
    name: "Intellectually curious",
    icon: curious
  },
  {
    name: "Time Management",
    icon: timeManagement
  },
  {
    name: "Adaptable",
    icon: adaptable
  }
];

const experiences = [
  {
    title: "Internship Trainee",
    company_name: "Chubb Business Services",
    icon: chubb,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Jun 2021",
    points: [
      "Automated the entire business process that had impacted 100+ customers.",
      "Developed 20+ data visualisation graphs based on the inputs.",
      "Undertook training on Flask for 7 days.",
    ]
  },
  {
    title: "Software Developer",
    company_name: "Zuora India",
    icon: zuora,
    iconBg: "#383E56",
    date: "July 2021 - February 2023",
    points: [
      "Revamped the integration of Zuora with other third party gateways for improved customer experience.",
      "Built APIs for various open payment methods within 4 months of joining.",
      "Integrated Zuora with Microsoft fraud detection system there by reducing the credit card attacks for1000+ customers.",
      "Solved 100+ Level 3 tickets that were a result of multiple high priority incidents.",
      "Triaged 2 to 3 incidents and was able to provide a detailed root cause analysis.",
    ]
  }
];

export { services, technologies, experiences };
