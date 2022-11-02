import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";

const URL = "https://jsonplaceholder.typicode.com/posts";

const SecondApi = () => {
  const [postsData, loading, isError] = useFetch(URL);

  if (isError) {
    return <h3>something was happned</h3>;
  }

  if (loading) {
    return <h3>loading...</h3>;
  }

  return (
    <div>
      <h1>posts</h1>
      <ul>
        {postsData.map((eachUser) => {
          return <li key={eachUser.id}>{eachUser.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default SecondApi;
