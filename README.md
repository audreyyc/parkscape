# CS 373 IDB-7

## Team

**Name:** IDB-7

**Project Leaders** 

**Responsibilities** Organize meetings and make sure everyone is on track.

**Phase 1:** Petar Iliev

**Phase 2:** Tanya Joseph

| Name            | UTEID   | GitLab           |
| --------------- | ------- | ---------------- |
| Petar Iliev     | pi2338  | @petarilievCS    |
| Tanya Joseph    | tcj547  | @tanyacjoseph    |
| Audrey Chen     | ayc732  | @audreyyc        |
| Noah Liu        | nl22256 | @noah.l          |
| Pawan Somavarpu | pks729  | @pawanksomavarpu |

## Project

**Name:** ParkScape

**URL:** https://www.parkscape.me

**Pipeline:** https://gitlab.com/petarilievCS/cs373-idb7/-/pipelines

**Git SHA:** [637d2150](https://gitlab.com/petarilievCS/cs373-idb7/-/commit/637d2150fc4a6c61319fc95f950f04c1f2470d43)

**Postman Docs:** https://documenter.getpostman.com/view/25781480/2s935uGgU4

## Description

A website that lets the users look up information about airports and nearby cities/national parks in the United States. The idea of the website is to help people who are travelling to specific cities/parks find other locations to visit nearby, and also find the closest airports to those locations. Our purpose is to help travellers make more educated decisions about their trips and witness the beautiful parks and cities of the US.

## Data Sources

- Cities: https://www.roadgoat.com/business/cities-api
- Parks: https://www.nps.gov/subjects/developer/api-documentation.htm
- Airports: https://airlabs.co/docs/airports

## Models

### Cities (~1,000)

- Attributes: state, population, budget score, safety score, average rating, best time to go, transportation
- Media: cover photos and listings on AirBnB
- Connections: nearest national parks/airports

### Parks (~400)

- Attributes: state, amenities, activities, cost, days of operation, alerts
- Media: photos and videos of the landscapes in the park
- Connections: nearest cities/airports

### Airports (~1,000)

- Attributes: city, state, whether the airport is international, number of runways, number of arrivals/departures
- Media: official website and location on Google Maps
- Connection: nearest national parks/cities

## Organizational Technique

One page per model with description and multimedia, grid of cards for each model page

## Questions

- I’m traveling to New York. What national parks can I also visit during my trip?
- I’m planning a trip to the Grand Canyon. What is the closest airport and what activities can I do there?
- I’m going on a business trip to Los Angeles. I’d like to know more about the city so that I can plan my trip better.

---

## Completion Times

### Phase 1

| Team Member     | Estimated time | Actual time |
| --------------- | -------------- | ----------- |
| Petar Iliev     | 8              | 10          |
| Tanya Joseph    | 10             | 10          |
| Audrey Chen     | 10             | 15          |
| Noah Liu        | 7              | 11          |
| Pawan Somavarpu | 8              | 9           |


**Comments:** Referenced [GeoJobs](https://gitlab.com/sarthaksirotiya/cs373-idb/) for splash page layout. React is listed as one of the tools on the About page, but we did not use it for this phase.


### Phase 2

| Team Member     | Estimated time | Actual time |
| --------------- | -------------- | ----------- |
| Petar Iliev     |                |             |
| Tanya Joseph    | 12             | 16          |
| Audrey Chen     |                |             |
| Noah Liu        |                |             |
| Pawan Somavarpu | 10             | 15          |


**Comments:**