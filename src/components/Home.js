import React, {useState} from "react";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa"


const Home = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <>
      <header className='primary-header'>
        <div className="nav-pull" >
          <Link className='logo' to='/'>
            <span className='logo-name'>Zion</span>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes className="fas fa-times" /> : <FaBars className="fas fa-bars" />}
          </div>
        </div>
        <div className='container'>
          <nav className={click ? "primary-nav" : "primary-nav close"}>
            <Link to='/about' className='navigate nav-effect'>
              About
            </Link>
            <Link to='/users' className='navigate nav-effect'>
              Users
            </Link>
            <Link to='/error' className='navigate error'>
              Error
            </Link>
          </nav>
        </div>
      </header>

      <main className="main_container">
        <section className='menu-section'>
          <div className='home-container'>
            <p>
              welcome to the <span className="home-page-effect">home page</span> 
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
