// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import vueLogo from './assets/tech_logo/vuedotjs.svg';
import lessLogo from './assets/tech_logo/less.js.svg';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import greenfossilLogo from './assets/company_logo/greenfossil-logo.png';
import innovixLogo from './assets/company_logo/innovix-logo.webp';

// Education Section Logo's
import spLogo from './assets/education_logo/splogo2.jpg';
import uitLogo from './assets/education_logo/UIT-Logo-big.png';

// Project Section Logo's
import leaveLogo from './assets/work_logo/leaveLogo.png';
import aiTrackerLogo from './assets/work_logo/aiExpenseTracker.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'VueJs', logo: vueLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'LESS', logo: lessLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
  {
    title: 'Others',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
        id: 0,
        img: greenfossilLogo,
        role: "Full-stack Developer Intern",
        company: "Greenfossil Pte Ltd",
        date: "March 2025 - April 2026",
        desc: "Built and maintained enterprise full-stack web applications, delivering production-ready features for multiple clients. Resolved 40+ production issues, improving stability and cutting user-reported defects by 30%. Led functional, regression, and UAT testing across 5+ projects, contributing to a 70% drop in post-release defects. Worked closely with senior developers and stakeholders across the full SDLC, and co-built an internal Leave Management System that automated HR workflows for 12 employees.",
        skills: [
            "Scala",
            "VueJS",
            "SQL",
            "LESS",
            "MariaDB",
            "Internal Frameworks",
        ],
    },
    {
        id: 1,
        img: innovixLogo,
        role: "ERP Developer Intern",
        company: "Innovix Solutions",
        date: "March 2022 - May 2022",
        desc: "Customized and deployed three Odoo ERP modules to streamline business operations. Automated reporting with Python, Excel, and py3o, saving around 3 hours of manual work weekly. Translated business requirements into scalable ERP solutions and trained 15+ employees, boosting adoption of newly implemented features.",
        skills: [
            "Odoo ERP",
            "Python",
            "Excel",
            "py3o",
        ],
    },
  ];
  
  export const education = [
    {
        id: 0,
        img: spLogo,
        school: "Singapore Polytechnic",
        date: "April 2023 - April 2026",
        // grade: "7.81 CGPA",
        desc: "Pursued the Diploma in Information Technology at SP's School of Computing, building a strong foundation in programming, data structures, web and application development, databases, and UI/UX design. The curriculum emphasized hands-on, industry-aligned projects, exposing me to real-world software development practices across the full project lifecycle, from requirements gathering to deployment, while developing problem-solving and collaborative skills essential to the tech industry.",
        degree: "Diploma in Information Technology",
    },
    {
        id: 1,
        img: uitLogo,
        school: "University of Information Technology, Myanmar",
        date: "December 2017 - March 2020",
        // grade: "73.2%",
        desc: "Completed coursework through the first semester of Year 3 in the Software Engineering track of UIT's Computer Science program before relocating. Covered core subjects including data structures and algorithms, object-oriented programming, database management systems, software design, and requirements engineering, gaining a solid foundation in building and maintaining software through practical, project-driven coursework.",
        degree: "Bachelor of Science - BSC (Computer Science)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "AI Expense Tracker",
      description:
        "A full-stack application designed to help users track and manage their expenses using AI-powered insights. The platform offers comprehensive profile stats and detailed results, helping users understand their spending patterns and make informed financial decisions.",
      image: aiTrackerLogo,
      tags: ["ReactJS", "Node.js", "PostgreSQL", "Express", "Tailwind CSS", "Gemini API"],
      github: "https://github.com/AyeTheintKM/ai-expense-tracker",
      webapp: "https://ai-expense-tracker-ekkv.onrender.com/",
    },
    {
      id: 1,
      title: "Greenfossil Leave Management System",
      description:
        "An enterprise-grade leave management system built with Scala, Vue.js, and internal company frameworks to automate leave requests and approvals. Implemented business logic for automated leave entitlement calculations based on company policy, and designed reporting dashboards, calendar views, and role-based access control (RBAC) to streamline usability for employees and managers alike.",
      image: leaveLogo,
      tags: ["Scala", "VueJS", "Internal Libraries", "MariaDB", "LESS"],
    },
    // {
    //   id: 2,
    //   title: "Email Validator NPM Package",
    //   description:
    //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    //   image: npmLogo,
    //   tags: ["React JS", "Node.js", "NPM", "Validation"],
    //   github: "https://github.com/codingmastr/cmtk-email-validator",
    //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    // },
    // {
    //   id: 3,
    //   title: "Task Reminder Chrome Extension Tool",
    //   description:
    //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    //   image: taskremLogo,
    //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
    //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    // },
    // {
    //   id: 4,
    //   title: "Webverse Digital",
    //   description:
    //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    //   image: webverLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    //   github: "https://github.com/codingmastr/Webverse-Digital",
    //   webapp: "https://webversedigital.com/",
    // },
    // {
    //   id: 5,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // }
  ];  