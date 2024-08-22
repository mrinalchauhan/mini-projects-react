
// this is working part 
import React, { useState, useEffect } from 'react';

const GitHubUserInfo = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (!response.ok) {
          throw new Error('User not found');
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [username]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{userData.login}</h2>
      <p>Name: {userData.name}</p>
      <p>Followers: {userData.followers}</p>
      {/* Add more information as needed */}
    </div>
  );
};

export default GitHubUserInfo;


// import React, { useEffect } from "react";
// import { useState } from "react";

// function GitHubUserInfo(){
//      const [data,setData]=useState([])
//     //syntax of useEffect:- useEffect(()=>{},[])    to fetch api we need useEffect as it adds the relvent fetch part while reloading the page
    
//     useEffect(()=>{
//         fetch(`http://api.github.com/users/mrinalchauhan`).then(response=>response.json).then(data=>{
//                             console.log(data);
//                              setData(data)})
//     },[])

//     return(
//     <>
//      <div>Extracting Github followers using Api</div>
//      <div className="text-center m-4 bg-yellow p-5"> GITHUB FOLLOWERS:{data.followers}

//      </div>
//     </>
//     );
// }

// export default GitHubUserInfo;
