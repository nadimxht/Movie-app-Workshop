import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Components/Search';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';
import {moviesList} from './assets/Data';
import Favorites from './Components/Favorites';

export default function App() {

    const [SearchWord, setSearchWord] = useState("");

    const [favorites , setFavorites] =useState([]) ; 
  const [openSide , setOpenSide]=useState(false);
    return (
        <div className='container'>
            {/* row for search bar */}
            <Favorites favorites={favorites} openSide={openSide} setOpenSide={setOpenSide}/>
            <Search setOpenSide={setOpenSide} setSearchWord={setSearchWord}/> {/* row for movie List*/}

            <MovieList
            setFavorites={setFavorites}
                movieData={SearchWord != ""
                    ? moviesList.filter(el => el.title.toLowerCase().includes(SearchWord.toLowerCase())) 
                    : moviesList}/> {/* row for add movie*/}
            <AddMovie/>
        </div>
    )
}

// movie app Movie List Search Favorites Add movie install bootstrap , react
// bootstrap