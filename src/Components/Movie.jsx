import { Button } from 'bootstrap';
import React, { useState } from 'react'
import { MdFavoriteBorder ,MdFavorite } from "react-icons/md";
import Rate from './Rate';

export default function Movie({setFavorites , movieDetails}) {
    const [liked , setLiked]=useState(false) ; 

  return (
    <div className='card col-5' style={{padding:"2rem" , height:"80vh" , margin:"1rem" , borderRadius:"1rem"}}>
       <div className='row'>
        <h3 className='col-6'>{movieDetails.title} </h3>
        { liked ? <MdFavorite onClick={()=>{setLiked(false) ; setFavorites((prev)=>prev.filter(e=>e.id!==movieDetails.id)) }}  className='col-6'/> : <MdFavoriteBorder onClick={()=>{setLiked(true) ; setFavorites((prev)=>[...prev ,movieDetails ])}} className='col-6' />  }  
       </div>
       
       <img width={"100%"} height={"60%"} src={movieDetails.posterUrl} alt="" />
       <p>{movieDetails.description}</p>

       <Rate movieRate={movieDetails.rate} />

    </div>
  )
}

