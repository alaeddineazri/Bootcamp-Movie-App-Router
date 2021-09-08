import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';




const MovieCard = (props) => {
    const {title,description,Image,trailer}=props.movie
    return (
    
        <div >
            <Link to={{pathname :`/description/${props.movie.id}`,state:{movie:props.movie}}}>
            <Card className ="box" style={{ border: "solid 2px black",width: "400px" ,height:"550px",marginLeft :"30px" ,marginBottom :"30px" ,transition: "1s"}} >
                <Card.Img  style={{height:"450px" }} variant="top" src={props.movie.Image} />
                <Card.Body>
                <Card.Title   style={{ color: '#FF8C00', fontWeight:'bold' }}>{props.movie.title} </Card.Title>
                    <StarRatingComponent value={ props.movie.rate } />
                </Card.Body>
            </Card>
            </Link>


        </div>
    )
}

export default MovieCard













