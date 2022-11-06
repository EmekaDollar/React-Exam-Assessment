import React from 'react'
import {Link, Outlet} from "react-router-dom"

const About = () => {
  return (
    <div>
    <header className="primary-header">
        <Link className="logo" to="/"><span className="logo-name">Zion Clothing Company</span></Link>
        <div className="container">
          <nav className="primary_nav">
            <Link to="/" className='navigate'>Home Page</Link> 
            <Link to="users" className='navigate'>Users</Link> 
          </nav>
        </div>
    </header>

    <main>
        <section className="about-section">
            <div className="container">
                <div>
                    <h3>
                        About Us
                    </h3>
                    <p>
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    </p>

                    <p>
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    </p>
                </div>
            </div>
        </section>

        <section className="next-section">
            <nav>
                <Link to="products">Products</Link>
                <Link to="features">Features</Link>
            </nav> 
            <Outlet />
        </section>        
    </main>
    </div>
  )
}

export default About