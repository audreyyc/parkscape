import GitLab from './images/gitlab.png';
import Postman from './images/postman.png';
import VSCode from './images/vscode.png';
import Bootstrap from './images/bootstrap.png'; 
import React from './images/react.png'; 
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
        desc: "An API platform for developers to design, build, test and iterate their APIs. Used to document the API for our website.",
    },
    {   
        image: VSCode,
        link: "https://code.visualstudio.com",
        name: "Visual Studio Code",
        desc: "Source-code editor developed by Microsoft. Used as a main IDE for html and javascript files.",
    },
    {   
        image: Bootstrap,
        link: "https://getbootstrap.com",
        name: "Bootstrap",
        desc: "A free and open-source CSS framework directed at responsive, mobile-first front-end web development. Used in conjunction with React for UI design.",
    },
    {   
        image: React,
        link: "https://reactjs.org",
        name: "React",
        desc: "A free and open-source front-end JavaScript library for building user interfaces based on UI components. Used for website UI design and dynamic features.",
    },
    {   
        image: Teams,
        link: "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software",
        name: "Microsoft Teams",
        desc: "Proprietary business communication platform developed by Microsoft. Used for team communication.",
    },
    {   
        image: AmazonWS,
        link: "https://aws.amazon.com",
        name: "Amazon Web Services",
        desc: "Subsidiary of Amazon that provides on-demand cloud computing platforms and APIs. Used for hosting our website/web pages.",
    },
    {   
        image: NameCheap,
        link: "https://www.namecheap.com/",
        name: "NameCheap",
        desc: "ICANN-accredited domain name registrar and web-host. Used to register our website's domain.",
    },
];

export { ToolsInfo };