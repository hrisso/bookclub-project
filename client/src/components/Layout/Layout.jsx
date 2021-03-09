import React from 'react';
import './Layout.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';


export default function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div>
      <Nav
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      {props.children}
      <Footer />
    </div>
  )
}
