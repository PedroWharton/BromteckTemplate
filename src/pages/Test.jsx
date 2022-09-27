import React from 'react'
import Nav from '../components/Nav.jsx';
import requests from '../requests';
import NewBanner from '../components/NewBanner.jsx';
import Row from '../components/Row.jsx';
import Slider from '../components/NetflixSlider'



export default function Test() {

  const movies = [
    {
      id: 1,
      image: '/images/slide1.jpg',
      imageBg: '/images/slide1b.webp',
      title: '1983'
    },
    {
      id: 2,
      image: '/images/slide2.jpg',
      imageBg: '/images/slide2b.webp',
      title: 'Russian doll'
    },
    {
      id: 3,
      image: '/images/slide3.jpg',
      imageBg: '/images/slide3b.webp',
      title: 'The rain',
    },
    {
      id: 4,
      image: '/images/slide4.jpg',
      imageBg: '/images/slide4b.webp',
      title: 'Sex education'
    },
    {
      id: 5,
      image: '/images/slide5.jpg',
      imageBg: '/images/slide5b.webp',
      title: 'Elite'
    },
    {
      id: 6,
      image: '/images/slide6.jpg',
      imageBg: '/images/slide6b.webp',
      title: 'Black mirror'
    }
  ];
  return (
    <div>
        <Nav/>
        <NewBanner/>
        <Row title='Trending Now' fetchURL={requests.fetchTrending}/>
        <Row title='Top Rated' fetchURL={requests.fetchTopRated}/>
        <Row title='Netflix Originals' fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
        <Slider>
          {movies.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>
    </div>  
  )
}
