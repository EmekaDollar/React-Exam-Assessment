import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function GithubRepo() {
    const [repo, setRepo] = useState([]);

    let {name} = useParams();
    console.log(name.toString())

    useEffect(() => {
        fetch(`https://api.github.com/repos/EmekaDollar/${name}`).then(
          (response) =>
            response.json().then((data) => {
              setRepo(data);
              console.log(repo)
            })
        );
      }, [name]);

  return (
    <div className="json-container">
      <p>{JSON.stringify(repo)}</p>
    </div>
  )
}

export default GithubRepo
