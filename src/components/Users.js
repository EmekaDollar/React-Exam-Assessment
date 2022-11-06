import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import ReactPaginate from "react-paginate";
import Pagination from "./Pagination";

const Users = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagePerUser, setPagePerUser] = useState(5);

  useEffect(() => {
    setLoading(true);
    fetch("https://randomuser.me/api/?page=1&results=50&nat=us").then(
      (response) =>
        response.json().then((data) => {
          setLoading(false);
          console.log(data.results);
          setItems(data.results);
        })
    );
  }, []);

  const lastPostIndex = currentPage * pagePerUser;
  const firstPostIndex = lastPostIndex - pagePerUser;
  const currentUser = items.slice(firstPostIndex, lastPostIndex);

  console.log(currentUser);

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
        {loading ? <p>loading...</p> :  currentUser.map((user) => (
        <div style={{border: "1px solid red"}}>
        <p>Gender : {user.gender}</p>
        <p>FirstName : {user.name.first}</p>
        <p>LastName : {user.name.last}</p>
        <p>Email : {user.email}</p>
        </div>
        ))}
      </div>
      <Pagination pagePerUser={pagePerUser} totalUsers={items.length} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  );
};

export default Users;
