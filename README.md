 
# Project Overview

# I.AM.ME

## Project Description
This is a Ruby on Rails app using React to build the front end.
I.AM.ME is positive affrimation app that will be there for your everyday personal needs, either you are having good day or bad. We will be here every step of the way. 
<br>

## Overview

- [Overview](#overview)
- [MVP](#mvp)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)


## MVP

- Create skeleton/structure files for back end and front end.
- Back End CRUD: Connect/Create API using ruby to pull data from a database.
- Front End CRUD: Render categories on home page; create, edit and delete functionality on the "make own affirmation page; Repeat/Like affirmations components
- CSS for all screens and components.
- Deployment to Heroku and Netlify.
- Create login page 
<br>

## Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _A JavaScript library for building user interfaces._ |
|   Axios   | _A promise based HTTP client for the browser and node.js._ |
| React Dom | _A package that serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package._ |
|   React Router Dom   | _A package that does declarative routing for React._ |
|    Ruby   | _A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write._ |
|    Rails   | _A server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages._ |
|   PostgreSQL   | _A powerful, open source object-relational database with a strong reputation for reliability, feature robustness, and performance._ |

<br>

### Client (Front End)

## Wireframe 
https://xd.adobe.com/view/4f05b8c2-dbea-484b-94da-f992bf8064c5-1a56/

## Component Tree (PAGE 1)
[Diagram]
https://cloud.smartdraw.com/readonly.aspx?depoId=22045404&credID=-32136455&pubDocShare=3AB6FC5FDA7913D53D9DFCEFB4440F0AA30

## Component Hierarchy

``` structure

src
|__ images/
      |__ image1
      |__ image2
      |__ image3
      |__ image4
      |__ image5
|__ components/
      |__ title.jsx
      |__ categories.jsx
      |__ affirmations.jsx
      |__ buttons.jsx
      |__ footer.jsx
      |__favorites.jsx
|__ db/
    |__ iamedb.jsx


```

## Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Title    | functional |   n   |   n   | _Display the title of the app and logo ._               |
|  Main Category  | functional |   n   |   n   | _Main Categories will render all corresponding affirmations  ._       |
|   Affirmations    |   functional    |   n   |   n   | _Affirmations will display on each page ._      |
| Favorites | functional |   n   |   n   | _Favorites will show all the user favorite quotes ._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |


## Time Estimates


| Task                | Priority | Estimated Time | Actual Time Invested | 
| ------------------- | :------: | :------------: | :-----------: | 
| Create Database    |    H     |     4 hrs      |     TBD     |   
| Back End CRUD|    M     |     5 hrs      |     TBD     |    
| React Skeleton Build |    H     |     3 hrs      |     TBD     |    
| Connect to API |    M     |     3 hrs      |     TBD     |     
| Front End CRUD |    H     |     5hrs      |    TBD   |     
| Styling( CSS, Flexbox) |    H     |     5 hrs      |    TBD     |  
| Code Review / Clean-Up / Comment | H | 3 hrs | TBD| TBD |
| Deployment  | H | 1 hr | TBD| TBD |
| **TOTAL**               |          |     **29.00 hrs**     |     **TBD**     |     


<br>

### Server (Back End)


## ERD Model (PAGE 2)

https://cloud.smartdraw.com/share.aspx/?pubDocShare=3AB6FC5FDA7913D53D9DFCEFB4440F0AA30

![Screenshot](https://i.ibb.co/XLrKNTj/Screen-Shot-2020-10-19-at-3-22-48-PM.png)

## Post-MVP

- Add photos to each affirmation as it changes 
- Favorites Page (Button)


## Code Showcase

"To be continued"

## Code Issues & Resolutions
 
 " To be continued"

