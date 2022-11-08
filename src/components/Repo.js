import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";

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

  return (
    <div>
      <header className='primary-header'>
        <Link className='logo' to='/'>
          <span className='logo-name'>Zion Clothing Company</span>
        </Link>
        <div className='container'>
          <nav className='primary_nav'>
            <Link to='/' className='navigate'>
              Home Page
            </Link>
            <Link to='about' className='navigate'>
              About
            </Link>
          </nav>
        </div>
      </header>

      <div>
        <h1>Pagination Demo</h1>
        {loading ? (
          <p>loading...</p>
        ) : (
          currentUser.map((user) => (
            <div
              onClick={() => {
                navigate(`/users/${user.name}`);
              }}
              style={{ border: "1px solid red" }}
            >
              <p>FirstName : {user.name}</p>
              <p>Language : {user.language}</p>
            </div>
          ))
        )}
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
