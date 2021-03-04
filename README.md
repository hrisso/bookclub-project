# Book Club Project

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
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

<br>

## Overview

**Book Club** is a webapp for avid readers to view and add book reviews to the collection of books once verified with an account. Visitors without an account will still be able to view the books and descriptions as well as reviews, but will not be able to contribute books or reviews to the collection.

### Features

- View Books with name, author, image, description
- View Reviews of books on book detail page with title, user, content
- Add Books to the collection when logged in
- Edit and delete books you created in the collection when logged in
- Write a review of a book when logged in
- Edit and delete reviews of books that you have written when logged in

### Goals

- Full CRUD front-end and back-end
- Three tables: Users, Books, Reviews
- Utilize multiple one-to-many relationships

### Challenges

- Contitionals on most buttons to only show when logged in
- CRUD for both books and the reviews
- Responsive styling

<br>

## MVP


### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Frontend js library|
|   React Router   | Frontend Links and Routes |
|       Rails      | Backend |
|      bcrypt      | Encode/decode |
|        jwt       | Authentication |

<br>

### Client (Front End)

#### Wireframes

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy

``` structure

src
|__ assets/
      |__ fonts
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ containers/
       |__ 
|__ shared/
       |__ Layout
|__ screens/
       |__ Home
       |__ 
|__ services/

```

#### Component Tree



[Component tree](url)

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |



<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

<br>

***

## Post-MVP

- Search functionality
- Image carousel
- Amazon links to purchase books

***

## Code Showcase


## Code Issues & Resolutions
