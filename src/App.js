import React, { useState } from 'react'
import './App.css';
import MovieList from './MovieList/MovieList';
import{moviesData} from './contants/data'
import AddMovie from './MovieList/AddMovie/AddMovie';
import FilterByName from './components/FilterByName/FiterByName';
import FilterByRate from './components/Rating/Rating'




function App() {
  const [movies, setMovies ] = useState (moviesData)
  const [inputSearch, setInputSearch] = useState("")
  const [rating, setRating] = useState(1)
  const add = (newMovie)=> {
    setMovies ([...movies,newMovie])
  }
  return (
    
    <div className="App">
      <h1>MOVIE APP</h1>
     
    <FilterByName inputSearch={inputSearch}setInputSearch ={setInputSearch} />
    <FilterByRate rating={rating}setRating={setRating}  />
      <MovieList isMovieRating={false} movies={movies}inputSearch={inputSearch} rating={rating}/>
      <AddMovie add ={add}/>
    </div>
  );

  }
export default App;
