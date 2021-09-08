import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Filter = (props) => {
    return (
        <div>  SEARCH 🔎
            <input placeholder='Movie Name' style={{ margin:'8px'}} className='input' type='text'onChange={(e)=>props.handelFilter(e.target.value) }></input>
            <span>Sort by <StarRatingComponent  name="movieRatingFilter" onStarClick={(value)=>props.handleRating(value)}/></span>
        </div>
    )
}

export default Filter
