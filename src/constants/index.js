import {
  backend,
  mobile,
  web,
  css,
  git,
  html,
  javascript,
  mern,
  redux,
  cplusplus,
  java,
  sql,
  typescript,
  zuora,
  chubb,
  devrev,
  python,
  nodejs,
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
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "git",
    icon: git,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "Java",
    icon: java
  },
  {
    name: "Python",
    icon: python
  },
  {
    name: "Typescript",
    icon: typescript
  },
  {
    name: "NodeJS",
    icon: nodejs
  },
  {
    name: "MySQL",
    icon: sql,
  },
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "M.E.R.N Stack",
    icon: mern,
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
      "Automated a business process workflow, improving operational eﬃciency and impacting 100+ customers through reduced manual eﬀort and faster response cycles.",
      "Developed 20+ interactive data visualization dashboards and graphs using Python and Matplotlib, enabling data-driven insights for leadership teams.",
      "Completed a 7-day training in Flask, gaining practical experience in building RESTful APIs, web routing, and server-side application development.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Zuora India",
    icon: zuora,
    iconBg: "#383E56",
    date: "July 2021 - December 2022",
    points: [
      "Revamped Zuora’s integration with third-party payment gateways, improving transaction success rate by 35% and enhancing customer checkout experience.",
      "Designed and built RESTful APIs for multiple open payment methods within 4 months, reducing integration time by 50%.",
      "Implemented idempotent support in payment gateways to ensure transaction reliability and eliminate duplicate payments, reducing billing errors by 90%.",
      "Integrated Zuora with Microsoft’s Fraud Detection System, reducing credit card fraud incidents by 70% and protecting 1,000+ enterprise customers.",
    ],
  },
  {
    title: "Applied AI Engineer",
    company_name: "DevRev",
    icon: devrev,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Created migration scripts for seamless onboarding of 50+ enterprise customers, reducing setup time by 60%.",
      "Built and deployed integrations, automations, and workflows that improved customer engagement efficiency by 45% and reduced onboarding errors by 30%.",
      "Designed and implemented analytical dashboards and SnapIns, enhancing observability by 30% across product and support teams.",
      "Integrated DevRev with customers’ existing tech stacks through custom scripts, API integrations, ETL pipelines, and debugging, reducing support escalations by 35%.",
      "Built and fine-tuned AI Agents that automated manual workflows, reducing human intervention by 40% and saving ~200 hours/month.",
      "Exported data from DevRev to Amazon S3, improving data analytics turnaround by 50%.",
      "Collaborated with Engineering, Product, and Customer Success teams to deliver custom automation and integration solutions for enterprise customers.",
    ],
  },
];

export { services, technologies, experiences };
