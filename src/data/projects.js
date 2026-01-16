const projects = [
  {
    id: "evently-app",
    title: "Evently",
    description:
      "A Flutter-based mobile app that helps users discover events based on their location. It also features a rating and comment system for events",
    longDescription:
      "Evently allows users to browse, filter and save events to Favorites for future reminders and notifications. It uses the TicketMaster API for event data and Firebase for user authentication and data management. For smaller, local events not listed on TicketMaster, users can manually add them to the app for everyone to see. Its rating and comment system enables users to share their feedback on events they attend making it a community-driven platform",
    tech: ["Flutter", "Firebase", "TicketMaster API"],
    thumbnail: "/images/eventlyLogo.png",
    screenshots: [
      "/images/evently1.jpg",
      "/images/evently2.jpg",
      "/images/evently3.jpg",
    ],
    github: "https://github.com/Agoritsa/evently",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "You are right here! This very own portfolio is also a personal project",
    longDescription:
      "A responsive React portfolio showcasing my projects, skills and contact info with a sleek aurora background. The purpose of this project is to demonstrate my web development skills and provide a platform for potential clients or employers to learn more about me and my work",
    tech: ["React", "Vite", "CSS3"],
    thumbnail: "/images/portfolio.png",
    screenshots: [
      "/images/portfolioscr1.png", 
      "/images/portfolioscr2.png"],
    github: "https://github.com/Agoritsa/my-portfolio/",
  },
];

export default projects;
