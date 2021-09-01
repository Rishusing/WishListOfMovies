import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card';

function Popular() {
    const [movies, setPost] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        let str = (Math.floor(1 + Math.random() * 50)).toString();

        const link = 'https://api.themoviedb.org/3/movie/popular?api_key=c4ee47a5036558795ec55f0df9417092&language=en-US&page='+str;
        axios.get(link)
            .then(res => {
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
                loading ? <div><div className="loader"></div></div> :
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

export default Popular