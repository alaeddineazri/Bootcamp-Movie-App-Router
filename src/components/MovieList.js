import React from 'react'
import { Container } from 'react-bootstrap'
import MovieCard from './MovieCard'
const MovieList = ({MovieData}) => {
    return (
    <Container>
        <div className="list">
        {MovieData.map(elm=><MovieCard key= {elm.id} movie={elm}/>)}
        </div>
    </Container>
    )
}

export default MovieList
