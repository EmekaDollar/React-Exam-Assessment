import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header className='primary-header'>
        <Link className='logo' to='/'>
          <span className='logo-name'>Zion Clothing Company</span>
        </Link>
        <div className='container'>
          <nav className='primary_nav'>
            <Link to='/about' className='navigate'>
              About
            </Link>
            <Link to='/users' className='navigate'>
              Users
            </Link>
            <Link to='/error' className='navigate'>
              Error
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className='menu-section'>
          <div className='container'>This the Home page</div>
        </section>
      </main>
    </>
  );
};

export default Home;
