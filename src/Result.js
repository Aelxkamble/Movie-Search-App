import React from "react";
import "./App.css";
function Result({ result }) {
  return (
    <div className="result  ">
      {console.log(result)}
      {/* <h1>{result.title}</h1> */}
      <div className="border border-dark border-4">
        <img src={result.Poster} alt="movie"></img>
      </div>
      <div className="bg-dark text-white p-2">
        <h5>{result.Title}</h5>
      </div>
    </div>
  );
}

export default Result;
