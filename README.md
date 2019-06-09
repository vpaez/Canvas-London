# Canvas
## Art shows in London

![Homepage](readme-assets/cover.png)

Canvas showcases art exhibitions and events in London, based on user preferences and location.

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
* Mapbox GL
* Ajax
* Python
* Flask
* PonyORM
* Marshmallow


## Installation

* Clone or download the repo
* `yarn` and `pipenv install` to install dependencies
* `createdb art-london` to create database using postgress
* `yarn run server` to run backend
* `yarn run client` to run front-end


## Introduction

We created our own database using Postgress to handle exhibitions, user data, and preferences.
This was a week long project in collaboration with Gabe Naughton.  We separated our workload into frontend and backend. We switched roles frequently, so we could both work on both parts of the website.
Canvas is a website to search for art events and exhibitions. The homepage has customised results for the logged in user, a recommended for you section based on their set preferences (painting, live art, photography) and a near you section for exhibitions happening within a … mile radius from their location.

In the browse exhibitions page, they can search for past, current and upcoming events.
Our concept is that the results and exhibitions results are customised to suit the user preferences. The user can also choose to see ticket price at full or concession price.

## Customised results

## Based on location
![Events near you](readme-assets/near-you.png)

## Based on taste
![Recommended events](readme-assets/recommended.png)

## Based on date

![Filter by date](readme-assets/filter-by-date.png)

With the option to filter by past, current and upcoming exhibitions using React Select

![Current events](readme-assets/whats-on.png)


## User Profile
In their user profile they can see the events they created, view and edit their preferences and see other users with same preferences.
![User details page](readme-assets/user-info.png)
![User contacts page](readme-assets/user-contacts.png)



## Future Features

We planned to do a messaging service using a third-party API but, given the short time span to deliver the project, we didn’t manage.









Future features messaging service
