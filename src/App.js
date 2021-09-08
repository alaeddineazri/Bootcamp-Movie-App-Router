
import {BrowserRouter,Link,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react"
import MovieList from './components/MovieList';
import MoviesData from './components/MovieData';
import Filter from './components/Filter'
import Add from './components/Add'
import Description from './components/Description';
 import Search from './components/Search'







function App() {
  const [filter, setFilter] = useState("")
  const [movieRating,setMovieRating]=useState(0);
  const [Movie,setMovie] = useState(MoviesData)
  const [newMovie, setNewMovie] = useState(
    {  title:"",
      description:"",
      Image:"",
      rate:"",}
    )


    const AddMovie = (newMovie) =>{
      setMovie(
        [...Movie, newMovie]
      )
    }

    const handelFilter=(val)=>{
    setFilter(val)
    }

    const handleRating=(rating)=>{
      setMovieRating(rating)
      }



  return (
    <BrowserRouter>
    <div className=".App">
      <div className="header">
      <h1> 🎥 MOVIES LIST 🎬</h1>
     
      <Route exact path="/"render={(props)=>(<Filter {...props} handleRating={handleRating} handelFilter={handelFilter} /> )} />
      <Route exact path="/"render={(props)=>(<Add {...props} AddMovie={AddMovie} newMovie={newMovie} setNewMovie={setNewMovie}/> )} />
      </div>
      <div className='list'>
      <Route exact path="/"render={(props)=>(<MovieList {...props}  MovieData ={Movie.filter(elm=>elm.title.toLowerCase().includes(filter.trim().toLowerCase())&& elm.rate>=movieRating)}/> )} />
      <Route path="/description/:id" render={(props)=> <Description {...props} Movie={MoviesData}/>} />
      </div>
    
    </div>
    </BrowserRouter>
  );
}

export default App;


