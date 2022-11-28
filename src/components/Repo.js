import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa"

const Repo = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagePerUser, setPagePerUser] = useState(3);

  let navigate = useNavigate();

  useEffect(() => {
    // Loading State
    setLoading(true);
    fetch("https://api.github.com/users/EmekaDollar/repos").then((response) =>
      response.json().then((data) => {
        setLoading(false);
        setItems(data);
        console.log(items);
      })
    );
  }, []);

  const lastPostIndex = currentPage * pagePerUser;
  const firstPostIndex = lastPostIndex - pagePerUser;
  const currentUser = items.slice(firstPostIndex, lastPostIndex);

  console.log(currentUser);

  let pages = [];

  for (let i = 1; i <= Math.ceil(items.length / pagePerUser); i++) {
    pages.push(i);
  }

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <div>
      <header className='primary-header'>
        <span className="nav-pull" >
          <Link className='logo' to='/'>
            <span className='logo-name'>Zion</span>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes className="fas fa-times" /> : <FaBars className="fas fa-bars" />}
          </div>
        </span>
        <div className='container'>
        <nav className={click ? "primary-nav" : "primary-nav close"}>
            <Link to='/' className='navigate nav-effect'>Home</Link>
            <Link to='about' className='navigate nav-effect'>About</Link>
            <Link to='/error' className='navigate error'>Error</Link>
          </nav>
        </div>
      </header>

      <div className="repo-wrap">
        <h1 className="pagination-demo">pagination demo</h1>
        <div className="user-wrap">
        {loading ? (
          <p className="loading-text">loading...</p>
        ) : (
          currentUser.map((user) => (
            <div className="user-container"
              onClick={() => {
                navigate(`/users/${user.name}`);
              }}
            >

              <div class="card-container">
                <div class="card">
                  <div class="box">
                    <div class="content">
                      <h2>01</h2>
                      <h3>FirstName : {user.name}</h3>
                      <p>Language : {user.language}</p>
                      <Link to='/about' className='card-link'>About</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      </div>

      <div className='page__container'>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prevValue) => prevValue - 1)}
        >
          Previous
        </button>

        {pages.map((page, index) => (
          <button
            className={page === currentPage ? "active__page" : ""}
            onClick={() => setCurrentPage(page)}
            key={index}
          >
            {page}
          </button>
        ))}
        <button
          disabled={currentPage === pages.length}
          onClick={() => setCurrentPage((prevValue) => prevValue + 1)}
        >
          Next
        </button>
      </div>

      <Outlet />
    </div>
  );
};

export default Repo;
