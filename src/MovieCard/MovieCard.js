import React from 'react'
import { Card,Button } from 'react-bootstrap'
import MovieRating from '../components/Rating/Rating'
import {Link} from 'react-router-dom'
const MovieCard = ({movie}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>{movie.description} </Card.Text>
          <MovieRating isMovieRating={true} movieRating= {movie.rate} />
          <Button variant="dark"><a href={movie.trailer} target={"_blanck"}></a>Trailer</Button>
          <Link to={`/${movie.id}`}>Description]</Link>
          </Card.Body>
          </Card>
    </div>
  )
}

export default MovieCard