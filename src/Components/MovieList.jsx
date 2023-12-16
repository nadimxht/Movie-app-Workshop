import React from 'react'
import Movie from './Movie'

export default function MovieList({setFavorites,movieData}) {
  return (
    <div className='row'>
        {
            movieData.map(movie=>(
                <Movie setFavorites={setFavorites} movieDetails={movie} key={movie.id}/>
            ))
        }
    </div>
  )
}
