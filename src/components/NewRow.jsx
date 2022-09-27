import React, { useState, useEffect } from 'react'
import axios from '../axios.js';
import '../stylesheets/components/Row.css';

const baseURL = 'https://image.tmdb.org/t/p/original'

function Row({title, fetchURL, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    

    useEffect(function(){
        async function fetchData(){
            let fetch = function(){
                const request = axios.get(fetchURL);
                return request
            }.then(function(result){
                setMovies(result.data.results)
            }).catch(function(error){
                console.log(error);
                fetch()
            })
        }
        fetchData()

    }, [fetchURL])
    


    

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row-posters'>
            {movies.map(movie => (
                <img
                key={movie.id}
                className={`row-poster ${isLargeRow && 'row-posterLarge'}`} 
                src={baseURL + (isLargeRow ? movie.poster_path: movie.backdrop_path)} 
                alt={movie.name}/>
            ))}
        </div>
    </div> 
  )
}

export default Row