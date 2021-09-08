import { colors } from "@material-ui/core";
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import '../App.css'

function Description(props) {
  const {title,description,Image,trailer}=props.location.state.movie
 return (<>
    <div>
    <div
      className="movie-wrapper"
      style={{
        backgroundImage: `url(${Image})`,
        backgroundPosition: "100% 60%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container ">
        <div className="row">
          <div className="col-lg-5">
            <div style={{backgroundColor:"black"}}className="movie-content">
              <h1 className="movie-title" style={{color: "white"}}>{title}</h1>
              <p className="movie-description" style={{color: "white"}}>{description}</p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="movie-trailer">
              <iframe
                title="trailer"
                width="500"
                height="350"
                src={trailer}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
          <Link to="/" ><button >Go Back</button> </Link>
   </div>
      </>
  );
}

export default Description;




