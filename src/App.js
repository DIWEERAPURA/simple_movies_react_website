import { useEffect, useState} from "react";
import './App.css';
import SearchIcon from './search.svg';

import MovieCard from "./MovieCard";
//4649534
const API_URL = 'https://www.omdbapi.com?apikey=4649534';


const movie1={
    "Title": "Discount Spiderman 2",
    "Year": "2018",
    "imdbID": "tt9146610",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BY2U4NjY2YTQtZDFiYS00YTk2LTk5NDItMWVlNmIwZjYyZmE5XkEyXkFqcGc@._V1_SX300.jpg"
}






const App = () => {
const [movies,setMovies]=useState([]);
const [searchTerm, setSearchTerm]=useState('');

 const searchMovies = async(title) => {
    const response =await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
 }
 useEffect(() => {
    searchMovies('Spiderman');
 }, []);


 return (
    <div className="app">
        <h1>Movies Anywhere</h1>
        <div className="search">
            <input
            placeholder="Search movies right here"
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            />
        <img 
            src={SearchIcon}
            alt="search"
            onClick={()=>searchMovies(searchTerm)}    
        />
        </div>

        {
            movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie)=>(<MovieCard movie={movie}/>))}
            
                 </div>
            ) : (
                <div className="empty"><h2>No movies found</h2></div>
            )
        }

        
    </div>
 )

}

export default App;