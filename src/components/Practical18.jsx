import { useState } from "react";
import "./Practical18.css";

function Practical18() {

    const [movie, setMovie] = useState("");
    const [rating, setRating] = useState("");
    const [movies, setMovies] = useState([]);

    const addMovie = () => {

        if (movie.trim() === "" || rating === "") {
            alert("Please enter movie name and rating");
            return;
        }

        const newMovie = {
            id: Date.now(),
            name: movie,
            rating: rating
        };

        setMovies([...movies, newMovie]);

        setMovie("");
        setRating("");
    };

    const removeMovie = (id) => {
        setMovies(
            movies.filter((movie) => movie.id !== id)
        );
    };

    return (
        <div className="movie-page">

            <div className="movie-container">

                <h1>Movie Watchlist</h1>

                <div className="movie-form">

                    <input
                        type="text"
                        placeholder="Enter movie name"
                        value={movie}
                        onChange={(e) => setMovie(e.target.value)}
                    />

                    <input
                        type="number"
                        min="1"
                        max="5"
                        placeholder="Rating 1-5"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />

                    <button onClick={addMovie}>
                        Add Movie
                    </button>

                </div>

                <h2>Watchlist</h2>

                {movies.length === 0 && (
                    <p className="empty-message">
                        No movies added yet.
                    </p>
                )}

                <div className="movie-list">

                    {movies.map((movie) => (

                        <div
                            className="movie-card"
                            key={movie.id}
                        >

                            <div>
                                <h3>{movie.name}</h3>

                                <p>
                                    Rating: {movie.rating}/5
                                </p>
                            </div>

                            <button
                                className="remove-btn"
                                onClick={() =>
                                    removeMovie(movie.id)
                                }
                            >
                                Remove
                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default Practical18;