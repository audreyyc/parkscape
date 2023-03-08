import GitLab from './images/gitlab.png';
import Postman from './images/postman.png';
import VSCode from './images/vscode.png';
import React from './images/react.png'; 
import Bootstrap from './images/bootstrap.png'; 
import Python from './images/python.png';
import MySQL from './images/mysql.png';
import SQLA from './images/sqla.png';
import Flask from './images/flask.png';
import Docker from './images/docker.png'
import Teams from './images/microsoft-teams.png';
import AmazonWS from './images/aws.png'; 
import NameCheap from './images/namecheap.png'; 

const ToolsInfo = [
    {   
        image: GitLab,
        link: "https://about.gitlab.com",
        name: "GitLab",
        desc: "An open-source DevOps software package which can develop, secure, and operate software. Used for our git repository and CI/CD platform.",
    },
    {   
        image: Postman,
        link: "https://www.postman.com",
        name: "Postman",
        desc: "An API platform for developers to design, build, test and iterate their APIs. Used to implement and document the API for our website.",
    },
    {   
        image: VSCode,
        link: "https://code.visualstudio.com",
        name: "Visual Studio Code",
        desc: "Source-code editor developed by Microsoft. Used as a main IDE for html and javascript files.",
    },
    {   
        image: React,
        link: "https://reactjs.org",
        name: "React",
        desc: "A free and open-source front-end JavaScript library for building user interfaces based on UI components. Used for website UI design and dynamic features.",
    },
    {   
        image: Bootstrap,
        link: "https://getbootstrap.com",
        name: "Bootstrap",
        desc: "A free and open-source CSS framework directed at responsive, mobile-first front-end web development. Used in conjunction with React for UI design.",
    },
    {   
        image: MySQL,
        link: "https://www.mysql.com/",
        name: "MySQL",
        desc: "An open-source relational database management system. Used to store data regarding our instances.",
    },
    {   
        image: SQLA,
        link: "https://www.sqlalchemy.org/",
        name: "SQLAlchemy",
        desc: "A Python database framework. Used to interact with our AWS RDS from our backend server.",
    },
    {   
        image: Flask,
        link: "https://flask.palletsprojects.com/en/2.2.x/",
        name: "Flask",
        desc: "A Python web development framework. Used to provide endpoints for our API.",
    },
    {   
        image: Docker,
        link: "https://www.docker.com/",
        name: "Docker",
        desc: "A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. Used to create frontend and backend containers.",
    },
    {   
        image: AmazonWS,
        link: "https://aws.amazon.com",
        name: "Amazon Web Services",
        desc: "Subsidiary of Amazon that provides on-demand cloud computing platforms and APIs. Used Amplify to host our frontend server. Used Lightsail to host our backend server. Used RDS to host our database",
    },
    {   
        image: NameCheap,
        link: "https://www.namecheap.com/",
        name: "NameCheap",
        desc: "ICANN-accredited domain name registrar and web-host. Used to register our website's domain.",
    },
    {   
        image: Teams,
        link: "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software",
        name: "Microsoft Teams",
        desc: "Proprietary business communication platform developed by Microsoft. Used for team communication.",
    }
];

export { ToolsInfo };
