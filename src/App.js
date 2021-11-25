import './App.css';
import instance from './axios';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>NETFLIX</h1>
      <Row title='NETFLIX ORIGINALS' fetchURL={requests.fetchNetflixOriginals} isLargeRow />
      <Row title='Trending Now' fetchURL={requests.fetchTrending} />
      <Row title='Top Rated' fetchURL={requests.fetchTopRated} />
      <Row title='Action Movies' fetchURL={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchURL={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchURL={requests.fetchHorrorMovies} />
      <Row title='Documentaries' fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
