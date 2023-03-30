import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import ParkCard from "../../../src/components/ParkCard/ParkCard.jsx";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import Sort from "../../components/Sort/Sort.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import "./Parks.css";
import { Spinner } from "react-bootstrap";

const Parks = ({ searchInput, showFilters }) => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalInstances, setTotalInstances] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(searchInput);
  const [sort, setSort] = useState(null);
  const [state, setState] = useState(null);
  const [activity, setActivity] = useState(null);
  const [topic, setTopic] = useState(null);

  function api() {
    let searchURI = search ? `&search=${encodeURI(search)}` : "";

    let sortURI = sort ? `&sort=${encodeURI(sort)}` : "";
    let stateURI = state ? `&states=${encodeURI(state)}` : "";
    let activityURI = activity ? `&activities=${encodeURI(activity)}` : "";
    let topicURI = topic ? `&topics=${encodeURI(topic)}` : "";

    let size_url = `https://api.parkscape.me/parks?${searchURI}${sortURI}${stateURI}${activityURI}${topicURI}`;
    let url = `https://api.parkscape.me/parks?page=${currentPage}${searchURI}${sortURI}${stateURI}${activityURI}${topicURI}`;

    axios.get(size_url).then((res) => {
      setTotalInstances(res.data.count);
    });

    axios.get(url).then((res) => {
      setData(res.data.data);
    });
  }

  useEffect(() => {
    if (searchInput) {
      setSearch(searchInput);
    }
  }, [searchInput]);

  useEffect(() => {
    if (search) {
      setLoading(true);
      api();
      setCurrentPage(1);
    }
  }, [search]);

  useEffect(() => {
    setLoading(true);
    api();
  }, [currentPage]);

  useEffect(() => {
    if (data) setLoading(false);
  }, [data]);

  const cardsPerPage = 12;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container className="d-flex justify-content-center flex-column">
      <Container className="container text-center mt-5 mb-4">
        <h1>Parks!</h1>
        <p style={{ fontSize: "20px", color: "darkgray" }}>
          {!loading ? totalInstances : "---"}
        </p>
      </Container>

      {showFilters && (
        <Container>
          <SearchBar setSearch={setSearch} searchID={"parksSearch"} />

          <div className="row mx-auto" style={{ width: "80%" }}>
            <div className="col">
            <Sort setSort={setSort} />
            </div>

            <div className="col">
              <Filter filterId={"topic"} setFilter={setTopic} data={topics} />
            </div>

            <div className="col">
              <Filter
                filterId={"activities"}
                setFilter={setActivity}
                data={activities}
              />
            </div>
            
            <div className="col">
              <Filter filterId={"states"} setFilter={setState} data={states} />
            </div>
          </div>

          <div className="text-center mt-3 mb-5">
            <button
              className="btn btn-large btn-success btn-lg"
              type="apply"
              onClick={() => {
                api();
              }}
            >
              Apply
            </button>
          </div>
        </Container>
      )}

      <Container className="px-4">
        <Container className="row gx-3">
          {!loading ? (
            data.map((park, index) => (
              <ParkCard
                title={park.name}
                imageSrc={park.photos[0]}
                operatingHours={park.weekdays}
                phone={park.phone}
                email={park.email}
                parkId={park.id}
                key={park.id}
                search={search}
              />
            ))
          ) : (
            <Container className="d-flex justify-content-center">
              <Spinner className="ms-3" animation="border" />
            </Container>
          )}
        </Container>
      </Container>

      {!loading && showFilters ? (
        <Pagination
          currentPage={currentPage}
          cardsPerPage={cardsPerPage}
          totalCards={totalInstances}
          paginate={paginate}
        />
      ) : (
        ""
      )}
    </Container>
  );
};

const states = [
  "State",
  "AK",
  "AL",
  "AR",
  "AZ",
  "CA",
  "CO",
  "CT",
  "DC",
  "DE",
  "FL",
  "GA",
  "GU",
  "HI",
  "IA",
  "ID",
  "IL",
  "IN",
  "KS",
  "KY",
  "LA",
  "MA",
  "MD",
  "ME",
  "MI",
  "MN",
  "MO",
  "MP",
  "MS",
  "MT",
  "NC",
  "ND",
  "NE",
  "NH",
  "NJ",
  "NM",
  "NV",
  "NY",
  "OH",
  "OK",
  "OR",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VA",
  "VT",
  "WA",
  "WI",
  "WV",
  "WY",
];

const topics = [
  "Topic",
  "Abolition Movement",
  "African American Heritage",
  "Alligators or Crocodiles",
  "American Revolution",
  "American Revolutionary War",
  "Ancient Seas",
  "Animals",
  "Aquifers",
  "Archeology",
  "Arches",
  "Architecture and Building",
  "Arctic",
  "Armories",
  "Artillery",
  "Arts",
  "Asian American Heritage",
  "Assassinations",
  "Astronomy",
  "Aurora Borealis",
  "Aviation",
  "Banking",
  "Battlefields",
  "Birds",
  "Birthplace",
  "Bison",
  "Bridges",
  "Burial",
  "Buttes",
  "Canals",
  "Canyons and Canyonlands",
  "Catastrophic Fires",
  "Cats (wild)",
  "Cavalry",
  "Caverns and Karst",
  "Caves",
  "Cemetery and Gravesite",
  "Churches",
  "Civil Rights",
  "Civil War",
  "Cliff Dwellings",
  "Climate Change",
  "Coastal Defenses",
  "Coasts",
  "Cold War",
  "Colonial/European Contact Conflicts",
  "Colonization and Settlement",
  "Commerce",
  "Coniferous Forests",
  "Conservation Movement",
  "Coral Reefs",
  "Dams",
  "Deciduous Forests",
  "Dinosaur",
  "Dunes",
  "Elk",
  "Endangered",
  "Engineering",
  "Enslavement",
  "Estuaries and Mangroves",
  "Explorers and Expeditions",
  "Explosions",
  "Factories",
  "Farming and  Agriculture",
  "Fire",
  "Fish",
  "Floods",
  "Foothills",
  "Forced Marches",
  "Forests and Woodlands",
  "Forts",
  "Fossils and Paleontology",
  "French and Indian War",
  "Freshwater Springs",
  "Geology",
  "Geothermal",
  "Geysers",
  "Glaciers",
  "Grasslands",
  "Great Depression",
  "Groundwater",
  "Headwaters",
  "Heiau",
  "Hispanic American Heritage",
  "Homesteading",
  "Horses (wild)",
  "Hospital",
  "Hot Springs",
  "Immigration",
  "Impact Craters",
  "Incarceration",
  "Indian and Frontier Wars",
  "Indigenous and Native Warrior",
  "Industry",
  "Infantry and Militia",
  "Islands and Atolls",
  "Jails and Prisons",
  "Japanese-American Internment",
  "Korean War",
  "LGBTQ American Heritage",
  "Labor Movement",
  "Laborer and Worker",
  "Lakes",
  "Landscape Design",
  "Latino American Heritage",
  "Lighthouses",
  "Logging and Timber Cutting",
  "Maritime",
  "Maritime - Military",
  "Marshes",
  "Massacres",
  "Meadows",
  "Medicine",
  "Mexican War",
  "Migrant Workers",
  "Migrations",
  "Military",
  "Mills",
  "Mineral Deposits",
  "Mining",
  "Missions",
  "Monuments and Memorials",
  "Mountains",
  "Murders",
  "Music",
  "National Cemetery",
  "Native American Heritage",
  "Natural Sounds",
  "Night Sky",
  "Oceans",
  "Pacific Islander Heritage",
  "Painting",
  "Petrified Wood",
  "Photography",
  "Piracy and Privateering",
  "Plains and Valleys",
  "Plantations",
  "Plateaus and Mesas",
  "Poetry and Literature",
  "Prairies",
  "Presidents",
  "Rainforest",
  "Ranches",
  "Rare",
  "Reconstruction",
  "Religion and Spirituality",
  "Religious Freedom",
  "River and Riparian",
  "Roads",
  "Rock Landscapes and Features",
  "Routes and Highways",
  "Ruins",
  "Scenic Views",
  "Schools and Education",
  "Science",
  "Sculpture",
  "Ships and Shipwrecks",
  "Social Movements",
  "Spanish-American War",
  "Swamps",
  "Technology and Innovation",
  "The Gold Rush",
  "The Tropics",
  "Thickets and Shrublands",
  "Tortoises and Turtles",
  "Trade",
  "Tragic Events",
  "Trails",
  "Trains and Railroads",
  "Transportation",
  "Tribal Conflicts",
  "Tundra",
  "Tunnels",
  "US Air Force (Army Air Corps)",
  "US Army",
  "US Coast Guard",
  "US Marines",
  "US Navy",
  "Unique Species",
  "Urban America",
  "Vietnam War",
  "Volcanoes",
  "Voting Rights and Suffrage",
  "War of 1812",
  "Wars and Conflicts",
  "Water Trails",
  "Waterfalls",
  "Watersheds",
  "Westward Expansion",
  "Wetlands",
  "Whales",
  "Wilderness",
  "Wolves",
  "Women's History",
  "World War I",
  "World War II",
];

const activities = [
  "Activity",
  "ATV Off-Roading",
  "Arts and Crafts",
  "Arts and Culture",
  "Astronomy",
  "Auto Off-Roading",
  "Auto and ATV",
  "Backcountry Camping",
  "Backcountry Hiking",
  "Biking",
  "Birdwatching",
  "Boat Tour",
  "Boating",
  "Bookstore and Park Store",
  "Bus/Shuttle Guided Tour",
  "Camping",
  "Canoe or Kayak Camping",
  "Canoeing",
  "Canyoneering",
  "Car or Front Country Camping",
  "Caving",
  "Citizen Science",
  "Climbing",
  "Compass and GPS",
  "Craft Demonstrations",
  "Cross-Country Skiing",
  "Cultural Demonstrations",
  "Dining",
  "Dog Sledding",
  "Downhill Skiing",
  "First Person Interpretation",
  "Fishing",
  "Fixed Wing Flying",
  "Fly Fishing",
  "Flying",
  "Food",
  "Freshwater Fishing",
  "Freshwater Swimming",
  "Front-Country Hiking",
  "Gathering and Foraging",
  "Geocaching",
  "Gift Shop and Souvenirs",
  "Golfing",
  "Group Camping",
  "Guided Tours",
  "Hands-On",
  "Helicopter Flying",
  "Hiking",
  "Historic Weapons Demonstration",
  "Horse Camping (see also Horse/Stock Use)",
  "Horse Camping (see also camping)",
  "Horse Trekking",
  "Horseback Riding",
  "Hunting",
  "Hunting and Gathering",
  "Ice Climbing",
  "Ice Skating",
  "Jet Skiing",
  "Junior Ranger Program",
  "Kayaking",
  "Live Music",
  "Living History",
  "Mini-Golfing",
  "Motorized Boating",
  "Mountain Biking",
  "Mountain Climbing",
  "Museum Exhibits",
  "Off-Trail Permitted Hiking",
  "Orienteering",
  "Paddling",
  "Park Film",
  "Picnicking",
  "Planetarium",
  "Playground",
  "Pool Swimming",
  "RV Camping",
  "Reenactments",
  "River Tubing",
  "Road Biking",
  "Rock Climbing",
  "SCUBA Diving",
  "Sailing",
  "Saltwater Fishing",
  "Saltwater Swimming",
  "Scenic Driving",
  "Self-Guided Tours - Auto",
  "Self-Guided Tours - Walking",
  "Shopping",
  "Skiing",
  "Snorkeling",
  "Snow Play",
  "Snow Tubing",
  "Snowmobiling",
  "Snowshoeing",
  "Stand Up Paddleboarding",
  "Stargazing",
  "Surfing",
  "Swimming",
  "Team Sports",
  "Theater",
  "Tubing",
  "Volunteer Vacation",
  "Water Skiing",
  "Whitewater Rafting",
  "Wildlife Watching",
];

export default Parks;
