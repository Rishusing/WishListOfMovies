import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Latest() {
    const [movie, setPost] = useState([])

    useEffect(() => {

        const link = 'https://api.themoviedb.org/3/movie/latest?api_key=c4ee47a5036558795ec55f0df9417092&language=en-US';
        axios.get(link)
            .then(res => {
                // console.log(res.data);
                setPost(res.data)
            }).catch(e => {
                console.log(e);
            })
    }, [])
    
    return (
        <div className='main'>
            <div key={movie.id} className="card" >
            <div className="innerCard">
            {
                movie.poster_path ? <div className="imageAndButton">
                                       <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} width="200px"/>
                                    </div> : <h4>Poster not Available</h4>
            }
                <div className="cardData">
                    <div className="cardDataChid">
                        <h2>Title : {movie.original_title}</h2>
                        { movie.release_date ? <h4>Release : {movie.release_date}</h4> : <h4>Release : Coming soon</h4>}
                        <h4>Rating : {movie.vote_average}</h4>
                        <p>Overview : {movie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Latest