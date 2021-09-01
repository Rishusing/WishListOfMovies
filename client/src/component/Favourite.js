import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import FavCard from './FavCard';


function Favourite() {
    const [movies, setPost] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const history = useHistory();
    const callAboutPage = async () => {
        try {
            const res = await fetch('/favourite', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json();
            setPost(data)
            setLoading(false)
            setError('')
            if (res.status !== 200) {
                const error = new Error(res.error)
                throw error;
            }

        } catch (err) {
            history.push('/login')
        }
    }
    // console.log(Object.keys(movies).length);
    if(Object.keys(movies).length !== 1){
       var mov = movies.map(ele => JSON.parse(ele))
    }

    useEffect(() => {
        callAboutPage();
    }, [])


    return (
        <div className="main">
            {
                loading ? <div className="loading"><div className="loader"></div></div> :
                    <div>
                        <h2 id="heading">Your favourites</h2>
                        {
                            mov === undefined ? <h2>nidata</h2>:mov.map(ele => (
                                <div><FavCard props={ele} /></div>
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

export default Favourite