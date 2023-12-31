# CS 373 IDB-7

## Team

**Name:** IDB-7

**Project Leaders** 

**Responsibilities** Organize meetings and make sure everyone is on track.

**Phase 1:** Petar Iliev

**Phase 2:** Tanya Joseph

**Phase 3:** Audrey Chen

**Phase 4:** Noah Liu

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

**Git SHA:** [9448708a](https://gitlab.com/petarilievCS/cs373-idb7/-/commit/9448708a5cced8cb0fa037d25d295082bfb28f96)

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
| Petar Iliev     | 20             | 20          |
| Tanya Joseph    | 12             | 16          |
| Audrey Chen     | 15             | 18          |
| Noah Liu        | 10             | 10          |
| Pawan Somavarpu | 10             | 15          |


**Comments:** As we've discussed with our TA, our API has issues where it tends to go down occasionally, which breaks our model and instance pages. This also causes our Selenium and Postman tests to fail. It seems to be a problem on NameCheap's end. 


### Phase 3

| Team Member     | Estimated time | Actual time |
| --------------- | -------------- | ----------- |
| Petar Iliev     | 10             | 10          |
| Tanya Joseph    | 10             | 12          |
| Audrey Chen     | 10             | 13          |
| Noah Liu        | 15             | 18          |
| Pawan Somavarpu | 13             | 15          |


**Comments:** As we've discussed with our TA, our API has issues where it tends to go down occasionally, which breaks our model and instance pages. This also causes our Selenium and Postman tests to fail. It seems to be a problem on NameCheap's end. We also ran out of CI minutes after the last phase, but they should be replenished soon.

### Phase 4

| Team Member     | Estimated time | Actual time |
| --------------- | -------------- | ----------- |
| Petar Iliev     |  5             |  5          |
| Tanya Joseph    |  5             |  5          |
| Audrey Chen     |  5             |  5          |
| Noah Liu        |  5             |  5          |
| Pawan Somavarpu |  7             |  5          |


**Comments:** N/A
