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
- Three one-to-many relationshipe: users to books, users to reviews, books to reviews
- Sucessfully implement with React and Rails

### Challenges

- Conditionals on most buttons to only show when logged in
- CRUD for both books and reviews of books
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
|        faker     | Fake some data |

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
      |__ shared/
          |__ Footer
          |__ Layout
          |__ Nav
|__ containers/
       |__ MainContainer.jsx
|__ screens/
       |__ BookDetail.jsx
       |__ BookCreate.jsx
       |__ BookEdit.jsx
       |__ ReviewCreate.jsx
       |__ ReviewEdit.jsx
       |__ SignIn.jsx
       |__ SignUp.jsx
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
| Backend Rails setup |    H     |     3 hrs      |    TBD    |    TBD   |
| Backend CRUD Actions|    H     |     3 hrs      |     TBD     |     TBD     |
| Authentication|    H     |     10 hrs      |     TBD     |     TBD     |
| Frontend React setup|    H     |     3 hrs      |     TBD     |     TBD     |
| Create Books Component|    H     |     5 hrs      |     TBD     |     TBD     |
| Edit Books Component|    H     |     5 hrs      |     TBD     |     TBD     |
| Create Reviews Component|    H     |     5 hrs      |     TBD     |     TBD     |
| Edit Reviews Component|    L     |     5 hrs      |     TBD     |     TBD     |
| Basic CSS Styling |    H     |     8 hrs      |     TBD     |     TBD     |
| Responsive CSS / Media Queries|    L     |     5 hrs      |     TBD     |     TBD     |
| Deployment|    H     |     2 hrs      |     TBD     |     TBD     |
| TOTAL               |          |     55 hrs      |     TBD     |     TBD     |



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
