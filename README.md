# Book Club Project

- [Overview](#overview)
- [MVP](#mvp)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Tree](#component-tree)
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


#### Component Hierarchy

``` structure

src
|__ assets/
      |__ fonts
      |__ images
      |__ mockups
|__ components/
      |__ BookCards
      |__ ReviewCards
      |__ shared/
          |__ Footer
          |__ Layout
          |__ Nav
|__ containers/
       |__ 
|__ screens/
       |__ Home
       |__ BookDetail
       |__ BookCreate
       |__ BookEdit
       |__ ReviewCreate
       |__ ReviewEdit
       |__ SignIn
       |__ SignOut
       |__ SignUp
|__ services/
       |__ api-config.js
       |__ auth.js
       |__ books.js
       |__ reviews.js

```

#### Component Tree

![Component tree](https://res.cloudinary.com/doas1ztbf/image/upload/v1614888454/P4%20Component%20Hierarchy.png)

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Backend Rails setup |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |



<br>

### Server (Back End)

#### ERD Model

![ERD Model](https://res.cloudinary.com/doas1ztbf/image/upload/v1614874534/P4ERD.png)

<br>

***

## Post-MVP

- Search functionality
- Image carousel
- Amazon links to purchase books
- Add ratings to reviews

***

## Code Showcase


## Code Issues & Resolutions
