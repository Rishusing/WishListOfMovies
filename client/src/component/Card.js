import React,{useState} from 'react'

const Card = ({ props }) => {

    const addToFavourite = async() =>{
        await fetch('/addToFavourite',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({props})
        })
    }

    return (
        <div key={props.id} className="card" >
            <div className="innerCard">
                <div className="imageAndButton">
                    <img src={"https://image.tmdb.org/t/p/w500" + props.poster_path} width="200px"/>
                    <button id="btn" onClick={addToFavourite}>Add to favourite</button>
                </div>
                <div  className="cardData">
                    <div className="cardDataChid">
                        <h2>Title : {props.original_title}</h2>
                        <h4>Release : {props.release_date}</h4>
                        <h4>Rating : {props.vote_average}</h4>
                        <p>Overview : {props.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
