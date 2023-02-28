import RoadGoat from './images/roadgoat.png';
import Maps from './images/googlemaps.png'
import RapidAPI from './images/rapidapi.png'
import NatParkService from './images/nationalparkservice.png'
import GitLab from './images/gitlab.png'

const APIInfo = [
    {   
        image: RoadGoat,
        link: "https://www.roadgoat.com/business/cities-api",
        name: "RoadGoat Cities API",
        desc: "Synthesizes information to provide the richest and most accurate context about over 4.3+ million destinations. Scraped by sending requests for each instance via Postman.",
    },
    {   
        image: Maps,
        link: "https://developers.google.com/maps",
        name: "Google Maps API",
        desc: "Integrates Google's Place details, search, and autocomplete into apps. Scraped by sending requests for each instance via Postman.",
    },
    {   
        image: RapidAPI,
        link: "https://rapidapi.com/Active-api/api/airport-info/",
        name: "Airport Info API",
        desc: "Extensive database of airport codes and data, including address, phone number, website and more. Scraped by sending requests for each instance via Postman.",
    },
    {   
        image: NatParkService,
        link: "https://www.nps.gov/subjects/developer/api-documentation.htm",
        name: "National Park Service",
        desc: "Provides authoritative National Park Service (NPS) data and content about parks and their facilities, events, news, alerts, and more. Scraped by sending requests for each instance via Postman.",
    },
    {   
        image: GitLab,
        link: "https://docs.gitlab.com/ee/api/",
        name: "GitLab API",
        desc: "Allows automation, interaction with GitLab, and integrating with external applications. Used to dynamically display repository stats by sending requests every page load.",
    },
];

export { APIInfo };