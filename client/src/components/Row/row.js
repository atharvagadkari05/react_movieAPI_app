import React, { useState, useEffect } from "react";
import "./row.css";
import axios from "axios";
const baseURL = "https://image.tmdb.org/t/p/original/";

function Row(props) {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(props.fetchUrl);

      setmovies(request.data.results);

      return request
     
    }

    fetchMovies();
  }, [props.fetchUrl]);

  return (
    <div className="row_container">
      <h2>{props.title}</h2>

      <div className="row">
        {movies.map((e) => (
     <img src={`${baseURL}${e.poster_path}`} />
          
        ))}
      </div>
    </div>
  );
}

export default Row;
