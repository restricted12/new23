import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios.jsx';  // Make sure axios is imported
import requests from '../../utils/requests.jsx';  // Assuming you have requests defined
import './Banner.css'

const Banner = () => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                console.log(request)
                setMovie(
                    request.data.results[
                        Math.floor(Math.random() * request.data.results.length)
                    ]
                );
            } catch (error) {
                console.log('Error fetching movie data:', error);
            }
        };
        
        fetchData(); // Call the fetch function
    }, []); // Empty dependency array to run once on component mount

    const truncate = (str, n) => {
       return str?.length > n ? str.substring(0, n) + '...' : str;
    };
 
    return (
        <div
            className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="banner-contents">
                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner-buttons">
                    <button className="banner-button play">Play</button>
                    <button className="banner-button">My List</button>
                </div>
                <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className="banner-fadebottom" />
        </div>
    );
};

export default Banner;
