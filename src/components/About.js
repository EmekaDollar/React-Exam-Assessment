import React, {useState} from "react";
import {Link, Outlet} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"

const About = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
    <div>
    <header className="primary-header">
        <span className="nav-pull" >
          <Link className='logo' to='/'>
            <span className='logo-name'>Zion</span>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes className="fas fa-times" /> : <FaBars className="fas fa-bars" />}
          </div>
        </span>
        <div className="container">
            <nav className={click ? "primary-nav" : "primary-nav close"}>
                <Link to="/" className='navigate nav-effect'>Home</Link> 
                <Link to='/users' className='navigate nav-effect'>Users</Link> 
                <Link to='/error' className='navigate error'>Error</Link>
            </nav>
        </div>
    </header>

    <main className='about-section'>
        <section>
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
            <nav className='product-features-wrap'>
                <Link className='products' to="products">Products</Link>
                <Link className='features' to="features">Features</Link>
            </nav> 
            <Outlet />
        </section>        
    </main>
    </div>
  )
}

export default About