import React, { useState, useEffect } from "react";
import './banner.css'
import axios from "axios";
import requests from "../../requests";

function Banner() {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const req = await axios.get(requests.fetchTrending);

      setmovies(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
      return req;
    }

    fetchMovies();
  }, []);

  console.log(movies.backdrop_path);

  return (
    <div
    className="banner"
   style={{
    backgroundSize: 'cover',
    backgroundImage:`url(
      "https://image.tmdb.org/t/p/original/${movies?.backdrop_path}"
      )` ,
    backgroundPosition: "center center",
   }}
    
    >
      <div className="banner_container">
        <h2>{movies?.name || movies?.original_name || movies?.title}</h2>
            <h2>{movies?.overview}</h2>
            <div className="banner_button_container">
              <button className="play_button">Play</button>
              <button className="moreinfo">More Info</button>
            </div>
                


      </div>
    </div>
  );
}

export default Banner;
