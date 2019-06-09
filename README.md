# Canvas
## Art shows in London

![Homepage](readme-assets/cover.png)




Canvas showcases art exhibitions and events in London, based on user preferences and location.
[Link to Live Website](https://canvas-london.herokuapp.com)

## Timeframe
7 days

## Technologies used

* React
* PostgreSQL
* Bulma
* SCSS
* Webpack
* Pipenv and yarn
* Git
* Ajax
* Python
* Flask
* PonyORM
* Marshmallow
* OpenCage API
* Mapbox API


## Installation

* Clone or download the repo
* `yarn` and `pipenv install` to install dependencies
* `createdb art-london` to create database using postgress
* `yarn run server` to run backend
* `yarn run client` to run front-end


## Introduction

Week long project in collaboration with Gabe Naughton.

We separated our workload into frontend and backend. We switched roles frequently, so we could both work on both parts of the website.
Canvas is a website to search for art events and exhibitions. The homepage has customised results for the logged in user, a recommended for you section based on their set preferences (painting, live art, photography) and a near you section for exhibitions happening within a … mile radius from their location.

In the browse exhibitions page, they can search for past, current and upcoming events.
Our concept is that the results and exhibitions results are customised to suit the user preferences. The user can also choose to see ticket price at full or concession price.

## Personalised Results

The different exhibition lists on canvas respond to the user. They're based on their location and their set preferences.

## Based on location
![Events near you](readme-assets/near-you.png)

## Based on taste
![Recommended events](readme-assets/recommended.png)

## Based on date

![Filter by date](readme-assets/filter-by-date.png)

With the option to filter by past, current and upcoming exhibitions using React Select

![Current events](readme-assets/whats-on.png)


## User Profile

Because customisation based on the user was really important to our project, we dedicated a substantial amount of time to develop a user profile page where the users could see events created by them, view and edit their preferences and see other users with same preferences. The user can also choose to see ticket prices displayed on the exhibition at full or concession price.

![User details page](readme-assets/user-info.png)
![User contacts page](readme-assets/user-contacts.png)




## Future Features

### Messaging service

Messaging service using a third-party API to connect the user with users with similar taste.

### More accurate map results

Implement an option for when the user is creating a new event, to double check the position in the map, before setting the address for the event. This would fix a small issue with the wrong coordinates being set for the event location, as certain galleries not being recognised by OpenCage API.
