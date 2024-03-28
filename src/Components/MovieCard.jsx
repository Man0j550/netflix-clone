import React from "react";
import './Css/NetflixCss.css'


const MovieCard = (props)=>{


    return(
    <div className="row">
      <h2>{props.zone}</h2>
      <div className="row-img">
        {
            props.movies.map((i,j)=>(
                <img className="row-poster row-posterLarge" key={j} src={i.src} value={i.title} />
            ))
        }

      </div>
    </div>
    )

}

export default MovieCard;