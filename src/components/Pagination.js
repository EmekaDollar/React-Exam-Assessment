import React from 'react'

function Pagination({pagePerUser, totalUsers, currentPage, setCurrentPage}) {
    let pages = [];

    for(let i = 1; i <= Math.ceil(totalUsers/pagePerUser); i++){
        pages.push(i)
    }
  return (
    <div>
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(prevValue => prevValue - 1)}>Previous</button>

        {pages.map((page,index) => (
        <button onClick={() => setCurrentPage(page)} key={index}>{page}</button>
    ))}
     <button disabled={currentPage === pages.length} onClick={() => setCurrentPage(prevValue => prevValue + 1)}>Next</button>

    </div>
  )
}

export default Pagination