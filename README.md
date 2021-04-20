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
|        faker     | Fake data |

<br>

### Client (Front End)

#### Wireframes

![Wireframes](https://res.cloudinary.com/doas1ztbf/image/upload/v1614908308/Web_1920_1_pci58b.png)
***
![Wireframes](https://res.cloudinary.com/doas1ztbf/image/upload/v1614908310/Web_1920_2_sxuzdy.png)
***
![Wireframes](https://res.cloudinary.com/doas1ztbf/image/upload/v1614908308/Web_1920_3_tfccxc.png)
***
![Wireframes](https://res.cloudinary.com/doas1ztbf/image/upload/v1614908307/Web_1920_4_q1rkdr.png)
***
![Wireframes](https://res.cloudinary.com/doas1ztbf/image/upload/v1614908308/Web_1920_5_knzuid.png)
***
![Wireframes](https://res.cloudinary.com/doas1ztbf/image/upload/v1614908309/Web_1920_6_xr6c2p.png)
***
![Wireframes](https://res.cloudinary.com/doas1ztbf/image/upload/v1614908308/Web_1920_7_gwp5hu.png)
***
![Wireframes](https://res.cloudinary.com/doas1ztbf/image/upload/v1614908309/Web_1920_8_bkfqxv.png)
***
![Wireframes](https://res.cloudinary.com/doas1ztbf/image/upload/v1614908309/Web_1920_9_dbkury.png)
***
![Wireframes](https://res.cloudinary.com/doas1ztbf/image/upload/v1614908309/Web_1920_10_yherom.png)
***

#### Component Hierarchy

``` structure

src
|__ components/
      |__ Footer
      |__ Layout
      |__ Nav
|__ containers/
       |__ MainContainer.jsx
       |__ ReviewContainer.jsx
|__ screens/
       |__ BookDetail.jsx
       |__ BookCreate.jsx
       |__ BookEdit.jsx
       |__ Books.jsx
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
| Backend Rails setup |    H     |     3 hrs      |    2hrs   |    2hrs   |
| Backend CRUD Actions|    H     |     4 hrs      |     5hrs     |     5hrs      |
| Authentication|    H     |     10 hrs      |     8hrs     |     8hrs     |
| Frontend React setup|    H     |     3 hrs      |     3hrs     |     3hrs     |
| Create Books Component|    H     |     5 hrs      |     5hrs     |     5hrs    |
| Edit Books Component|    H     |     5 hrs      |     8hrs    |     8hrs     |
| Create Reviews Component|    H     |     5 hrs      |     5hrs     |     5hrs     |
| Edit Reviews Component|    L     |     5 hrs      |     8hrs     |     8hrs     |
| Basic CSS Styling |    H     |     8 hrs      |     8hrs     |     8hrs     |
| Responsive CSS / Media Queries|    L     |     5 hrs      |     5hrs     |     5hrs     |
| Deployment|    H     |     2 hrs      |     1hr     |     1hr     |
| TOTAL               |          |     55 hrs      |     58hrs     |     58hrs     |



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
I included reviews as a second level with the GET books request in the Rails backend so I could access the reviews associated with the book directly from a GET request for books in the frontend.

I also needed to associate books with the user that created them in the backend POST request so I could conditionally display edit/delete buttons on the frontend.
```
  # GET /books/1
  def show
    render json: @book, :include => [:reviews => {:include => :user}]
  end

  # POST /books
  def create
    @book = Book.new(book_params)
    @book.user = @current_user

    if @book.save
      render json: @book, status: :created
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

```


## Code Issues & Resolutions

- Accessing relevant Reviews within the books data
  - Include second level of data in Rails backend
- Redirecting to correct books page after review create
  - Needed to include both bookid and reviewid in handle create and handle update of reviews
- Adding ReviewsContainer component for reviews State
  - Moved state down to new ReviewsContainer to separate books state from review state and passed down books as props
- Responsive styling while keeping books containers consistent when images are different sizes
  - Needed to hardcode image size but could still adjust container size with screen size
