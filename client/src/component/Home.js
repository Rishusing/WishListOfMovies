import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card';

function Home() {
    const [movies, setPost] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        let str = (Math.floor(1 + Math.random() * 50)).toString();

        const link = 'https://api.themoviedb.org/3/discover/movie?api_key=c4ee47a5036558795ec55f0df9417092&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=' + str + '&with_watch_monetization_types=flatrate';
        axios.get(link)
            .then(res => {
                // console.log(res.data.results);
                setPost(res.data.results)
                setLoading(false)
                setError('')
            }).catch(e => {
                setLoading(false)
                setError('something went wrong')
            })
    }, [])

    return (
        <div className='main'>
            {
                loading ? <div><div class="loader"></div></div> :
                    <div>
                        <h2 id="heading">:): Refresh page for more movies</h2>
                        {
                            movies.map(ele => (
                                <div><Card props={ele} /></div>
                            ))
                        }
                    </div>
            }
            {
                error ? error : null
            }
        </div>
    )
}

export default Home
