import {useState, useEffect ,React} from 'react'
import axios from 'axios';
const baseURl = 'https://api.themoviedb.org/3'
const testURl = 'https://api.themoviedb.org/3/discover/tv?api_key=420256deff5976ec338e5aa854fd52e5&with_networks=213'
function Row(props) {
  
  const [movies,setmovies] = useState([]);


  useEffect(() => {

async function fetchMovies(){
const req = await axios.get(testURl);
console.log(req.data.results)
setmovies(req.data.results)
return req
}
 
fetchMovies()
  },[testURl])

  console.table(movies)
  
    return (
<div className='row_container'>
<h2>{props.title}</h2>
<div className='row_poster'>
{
    movies.map((movie) => {
        // <img src={`${baseURl}${movie.poster_path}`} alt={movie.name}/>
        <h6>{movie.name}</h6>
    })
}
</div>
</div>
  )
}

export default Row