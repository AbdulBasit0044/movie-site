const url = process.env.REACT_APP_URL

export const GetMovies = () => {
    return fetch(`${url}/movies`)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return new Error(error);
        });
}

export const GetMoviesBasedOnId = (id) => {
    return fetch(`${url}/movies/${id}`)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return new Error(error);
        });
}

export const CreateMovie = async (obj) => {
    try {
        return await fetch(`${url}/movies/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj),
        })
    } catch (error) {
        return new Error(error);
    }
}

export const DeleteMovie = async (id) => {
    try {
        return await fetch(`${url}/movies/${id}`, {
            method: "DELETE",
        })
    } catch (error) {
        return new Error(error);
    }
}

export const UpdateMovie = async (obj) => {
    try {
        return await fetch(`${url}/movies/${obj.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj),
        })
    } catch (error) {
        return new Error(error);
    }
}

export const GetWatchlist = () => {
    return fetch(`${url}/watchlist`)
        .then((resp) => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error('Something went wrong');
            }
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return new Error(error);
        });
}

export const AddToWatchlist = async (obj) => {
    try {
        return await fetch(`${url}/watchlist/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj),
        })
    } catch (error) {
        return new Error(error);
    }
}