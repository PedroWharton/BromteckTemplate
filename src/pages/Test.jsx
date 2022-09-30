import React from 'react'
import Nav from '../components/Nav.jsx';
import requests from '../requests';
import Banner from '../components/Banner.jsx';
import Row from '../components/Row.jsx';



export default function Test() {

  
  return (
    <div>
        <Nav/>
        <Banner/>
        <Row title='Trending Now' fetchURL={requests.fetchTrending}/>
        <Row title='Top Rated' fetchURL={requests.fetchTopRated}/>
        <Row title='Netflix Originals' fetchURL={requests.fetchNetflixOriginals} isLargeRow/>

    </div>  
  )
}
