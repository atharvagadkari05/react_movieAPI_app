import './App.css';
import Row from './components/Row/row';
import requests from './requests';

function App() {
  return (
    <div className="App" >
     <Row title ="Netflix Original" fetchUrl = {requests.fetchNetflixOriginals} />
    </div>
  );
}

export default App;
