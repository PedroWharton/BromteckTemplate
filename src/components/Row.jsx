import React, { useState, useEffect, useRef } from 'react'
import axios from '../axios.js';
import '../stylesheets/components/Row.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const baseURL = 'https://image.tmdb.org/t/p/original'

function Row({title, fetchURL, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    const slider = useRef(null)

    useEffect(function(){
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovies(request.data.results)
            return
        }
        fetchData()

    }, [fetchURL])

    const slideLeft = () => {
        return slider.current ? (slider.current.scrollLeft -= 190) : null;
    }

    const slideRight = () => {
        return slider.current ? (slider.current.scrollLeft += 190) : null;
    }

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="slider-container">
            <div className="arrow-container" onClick={slideLeft}>
                <ArrowBackIosNewIcon className='slider-icon'/>
            </div>
            <div className='row-posters' id='slider' ref={slider}>
                {movies?.map(movie => (
                    <img
                    key={movie.id}
                    className={`row-poster ${isLargeRow && 'row-posterLarge'}`} 
                    src={baseURL + (isLargeRow ? movie.poster_path: movie.backdrop_path)} 
                    alt={movie.name}/>
                ))}
            </div>
            <div className="arrow-container" onClick={slideRight}>
                <ArrowForwardIosIcon className='slider-icon'/>
            </div>
        </div>
    </div> 
  )
}

export default Row

