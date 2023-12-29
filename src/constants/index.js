import {
    datastudio,
    flutter,
    java,
    python,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    wro,
    wrg,
    xhacks,
    dga,
    eis,
    uoft,
    dema,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Student Representative",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
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
      name: "Java",
      icon: java,
    },
    {
      name: "Flutter",
      icon: flutter,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Data Studio",
      icon: datastudio,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Top 16 Global Finalist",
      company_name: "World Robot Olympiad",
      icon: wro,
      iconBg: "#E6DEDD",
      date: "November 2015",
      points: [
        "Developed and refined robot prototypes for the given competition tasks under the theme of robot explorers.",
        "Collaborated with a team of 3 and a coach to program and debug robot to optimize task completion time.",
        "Adapted to new additional tasks put in place on competition day under tight time limit.",
      ],
    },
    {
      title: "World Champion",
      company_name: "World Robot Games",
      icon: wrg,
      iconBg: "#000000",
      date: "August 2016",
      points: [
        "Developedand refined an Arduino based fire fighting robot to complete the task in place.",
        "Collaborated with a teammate and a coach to fix bugs and optimize time taken to put out fires.",
        "Adapted and optimized robot runtime to hurdles under time constraint.",
      ],
    },
    {
      title: "Coding Club Founder",
      company_name: "High School",
      icon: eis,
      iconBg: "#E6DEDD",
      date: "Jan 2019 - May 2022",
      points: [
        "Ran a school club dedicated to programming with Python and Arduino languages.",
        "Hosted schoolwide Python discord bot creation competition.",
        "Created child friendly obstacle-avoiding alcohol dispenser robot for school classrooms.",
        "Hosted programming workshops and providing constructive feedback to other student developers.",
      ],
    },
    {
      title: "Data Analyst Intern",
      company_name: "Digital Government Development Agency Thailand",
      icon: dga,
      iconBg: "#E6DEDD",
      date: "Jun 2021 - Aug 2021",
      points: [
        "Employed Java and SQL to model, present, and analyze workflow and business data.",
        "Utilized Google Data Studio to present monthly reports monitoring large amounts of customer data.",
        "Assisted in streamlining the company's backend DevOps process for security integration.",
      ],
    },
    {
      title: "Best Rookie Hack",
      company_name: "XHacks Hackathon",
      icon: xhacks,
      iconBg: "#000000",
      date: "August 2021",
      points: [
        "Utilized Angular and Firebase to create a web application for hosting online debate tournaments.",
        "Created landing page with user authentication, and added text and audio sharing functionalities.",
        "Designed UX and UI elements as well as graphics for the website's pages.",
      ],
    },
    {
      title: "Pursuing a Computer Science Major",
      company_name: "University of Toronto",
      icon: uoft,
      iconBg: "#E6DEDD",
      date: "September 2022 - Present",
      points: [
        "Pursuing a comprehensive education in Data Structures, Algorithms, and Machine Learning, amongst related fields.",
        "Creating a Fintech Club to connect together like-minded students and host workshops and case-competitions.",
        "Taking part in computer science related clubs and initiatives on campus through workshops and hackathons.",
      ],
    },
    {
      title: "1st Place Team",
      company_name: "Youth Entrepreneurship Case Competition",
      icon: dema,
      iconBg: "#E6DEDD",
      date: "April 2023",
      points: [
        "Developed and presented a thorough business plan that promoted technological cooperation and set the foundation for global expansion.",
        "Implemented timelines for effective ERP integration between different company systems, promoting flexibility and conserving company structures.",
        "Drafted optimal company acquisition plans and the strategies to be taken to ensure a smooth merger style acquisition.",
      ],
    }
  ];
  
  const projects = [
    {
      name: "Flutter App",
      description:
        "Coming Soon.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Future Project?",
      description:
        "Maybe some full stack web app.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Hmm",
      description:
        "What now.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };