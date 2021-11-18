import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [overview, setOverview] = useState('');
    const [rating, setRating] = useState('');
    const [img, setImg] = useState('https://i.ytimg.com/vi/VzvdoLeXClg/movieposter_en.jpg');
    const navigate = useNavigate();

    const handleAddMovieSubmit = (e) => {
        e.preventDefault();
        const movie = { title, director, overview, rating, img };
        console.log(movie)
        fetch('http://localhost:8001/movies/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(movie)
        })
            .then(() => {
                navigate('/');
            })
    }
    return (
        <div className="create">
            <h2>Add new movie</h2>
            <form onSubmit={handleAddMovieSubmit}>
                <label>Movie Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <label>Director Name</label>
                <input
                    type="text"
                    value={director}
                    onChange={(e) => setDirector(e.target.value)}
                />
                <label>Overview</label>
                <input
                    type="text"
                    value={overview}
                    required
                    onChange={(e) => setOverview(e.target.value)}
                />
                <label>Rating</label>
                <input
                    type="text"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
                <label>Cover Image Link</label>
                <input
                    type="text"
                    value={img}
                    onChange={(e) => setImg(e.target.value)} />
                <button>Add Movie</button>
            </form>
        </div>
    );
}

export default Create;