const url = process.env.REACT_APP_URL

export const GetMovies = () => {
    return fetch(`${url}/movies`)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            return data;
        });
}

export const GetMoviesBasedOnId = (id) => {
    return fetch(`${url}/movies/${id}`)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            return data;
        });
}

export const CreateMovie = async (obj) => {
    return await fetch(`${url}/movies/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
    })
}

export const DeleteMovie = async (id) => {
    return await fetch(`${url}/movies/${id}`, {
        method: "DELETE",
    })
}

export const UpdateMovie = async (obj) => {
    return await fetch(`${url}/movies/${obj.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
    })
}