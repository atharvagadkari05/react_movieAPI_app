const API_KEY = "420256deff5976ec338e5aa854fd52e5";

const requests = {
    fetchTrending: '/trending/all/week?api_key=$(API_KEY)&language=en-US',
     fetchNetflixOriginals: '/discover/tv?api_key=$(API_KEY)&with_networks=213',
      fetchTopRated: '/movie/top rated?api_key=${API_KEY)&language=en-US',
       fetchActionMovies: '/discover/movie7api_key=${API_KEY)&with genres-28',
        fetchComedyMovies: '/discover/movie?api_key=$(API_KEY)&with genres=35',
         fetchHorrorMovies: '/discover/movie?api_key=${API_KEY)&with_genres=27',
          fetchRomanceMovies: '/discover/movie?api_key=${API_KEY)&with genres=10749',
           fetchDocumentaries: '/discover/movie?api_key=${API_KEY)&with genres-99',
}


export default requests;