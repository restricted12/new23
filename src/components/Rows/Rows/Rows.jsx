import axios from '../../../utils/axios';
import React, { useEffect, useState } from 'react';
import './Rows.css'; // Ensure correct path for the CSS file
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const Rows = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };
        fetchData();
    }, [fetchUrl]);

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch((error) => console.error("Trailer not found:", error));
        }
    };

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row__posters">
                {movies?.map((movie, index) => (
                    <img
                        key={index}
                        onClick={() => handleClick(movie)}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name || "Movie Poster"}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    />
                ))}
            </div>
            <div style={{ padding: '40px' }}>
                {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
            </div>
        </div>
    );
};

export default Rows;
