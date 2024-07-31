import {
    brain,
    flightTest,
    reasearchProject,
    sitlImage
  } from "../assets";
  
  export const navLinks = [
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer I & II",
      company_name: "Raytheon Intelligence & Space",
      date: "2022 - Present",
      details: [
        "Leading integration of a COTS mapping API into a thin-client web application for operation in satellite system management as a subsystem of governing program; developing with Javascript, Typescript, and CSS in an Angular and React based app",
        "Developing and improving reuse software to better fit program needs including adding new and custom features to web application allowing for more freedom and customization for user",
        "Deploying services and docker images for application to Kubernetes clusters using helm charts",
        "Experiencing the Agile software lifecycle using Jira and other Atlassian tools; focusing on leveraging iterative and incremental software development allowing for emphasis on flexibility and collaboration among cross-functional teams",
        "Conducted multiple trade studies to determine most effective front-end web framework for use case along with what open source or COTS software would best fit needs and desires of program; compared Vue.js, Angular, and React for frameworks"
      ],
    },
    {
      title: "Undergraduate Research Assistant",
      company_name: "BioServe Space Technologies",
      date: "2021 - 2022",
      details: [
        "Developed and designed a Virtual Reality simulation of The Lunar Rover using Unity programming in C# to test stochastic resonance as a use in spaceflight countermeasures",
        "Expanded project scope to include development of a procedural generated terrain maps to help further research by adding an aspect of random noise into testing; Maps were created in Unity with C# for implementing white noise"
      ],
    },
    {
      title: "Field Engineering Intern",
      company_name: "Hensel Phelps Construction",
      date: "2020 - 2020",
      details: [
        "Explored working as a field engineering intern for Hensel Phelps Construction Co., Utilizing advanced diagnostic tools and such as surveying robots to help identify and resolve technical issues",
        "Learned how to read and write on lift drawings and specifications through Revit",
        "Co-led concrete pouring operations for pier caps, playing a crucial role in ensuring structural integrity and longevity of project building"
      ],
    },
  ];
  
  const projects = [
    {
      name: "Senior Captone Project - 2022",
      description:
        [
          "Lead the implementation of a software controller for an autonomous high endurance UAV system. The goal of this project was to increase the endurance of a UAV system through software only.",
          "This was achieved by controlling the flight pattern and designing a control system that would minimize power consumption. "
        ],
      image: flightTest
    },
    {
    name: "Undergraduate Research Assistant",
    description:
      [
        "During my time as an undergraduate research assistant I helped develop a Unity based Mars rover simulator for use in testing stochastic resonance as a spaceflight coutnermeasure. The findings of which can be found <a style='color: blue;' href='https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2023.1180314/full'>here</a>",
        "My role on this project was to develop the procedural generation of the testing map."
      ],
    image: reasearchProject
  }
  ];
  
  export { experiences, projects };