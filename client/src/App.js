import './App.css';
import Row from './components/Row/row';
import requests from './requests';
import Banner from './components/banner/banner';


function App() {
 

 
  return (
    <div className="App" >
    <Banner/>
     <Row title ="Netflix Original" fetchUrl = {requests.fetchNetflixOriginals} />
     <Row title ="Trending" fetchUrl = {requests.fetchTrending} />
     <Row title ="Horror" fetchUrl = {requests.fetchHorrorMovies} />
    </div>
  );
}

export default App;
