import React from 'react'
import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from '../requests';
import Nav from '../components/Nav';

const HomeScreen = () => {
    return (
        <>
            <Nav />
            <Banner />
            <Row title='NETFLIX ORIGINALS' fetchURL={requests.fetchNetflixOriginals} isLargeRow />
            <Row title='Trending Now' fetchURL={requests.fetchTrending} />
            <Row title='Top Rated' fetchURL={requests.fetchTopRated} />
            <Row title='Action Movies' fetchURL={requests.fetchActionMovies} />
            <Row title='Comedy Movies' fetchURL={requests.fetchComedyMovies} />
            <Row title='Horror Movies' fetchURL={requests.fetchHorrorMovies} />
            <Row title='Documentaries' fetchURL={requests.fetchDocumentaries} />
        </>
    )
}

export default HomeScreen
