import React, { useState, useEffect } from 'react'
import axios from '../axios.js';
import '../stylesheets/components/Row.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const baseURL = 'https://image.tmdb.org/t/p/original'

function Row({title, fetchURL, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    useEffect(function(){
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovies(request.data.results)
            return
        }
        fetchData()

    }, [fetchURL])

    const slideLeft = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }


    

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="slider-container">
            <ArrowBackIosNewIcon className='slider-icon' onClick={slideLeft}/>
            <div className='row-posters' id='slider'>
                {movies?.map(movie => (
                    <img
                    key={movie.id}
                    className={`row-poster ${isLargeRow && 'row-posterLarge'}`} 
                    src={baseURL + (isLargeRow ? movie.poster_path: movie.backdrop_path)} 
                    alt={movie.name}/>
                ))}
            </div>
            <ArrowForwardIosIcon className='slider-icon' onClick={slideRight}/>
        </div>
    </div> 
  )
}

export default Row

