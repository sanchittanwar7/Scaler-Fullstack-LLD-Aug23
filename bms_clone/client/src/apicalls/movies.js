const { axiosInstance } = require('.')

// Get all movies

export const GetAllMovies = async () => {
    try {
        const response = await axiosInstance.get('api/movies/getAllMovies')
        return response.data
    } catch (error) {
        return error
    }    
}

export const GetMovieById = async (movieId) => {
    try {
        console.log(movieId)
        const response = await axiosInstance.get(`/api/movies/getMovieById/${movieId}`)
        return response.data
    } catch (error) {
        return error
    }    
}

export const AddMovie = async (payload) => {
    try {
        const response = await axiosInstance.post("api/movies/add", payload)
        return response.data
    } catch (error) {
        return error
    }
}

export const DeleteMovie = async (payload) => {
    try {
        console.log(payload)
        const response = await axiosInstance.post("api/movies/delete", payload)
        return response.data
    } catch (error) {
        return error
    }
}

export const UpdateMovie = async (payload) => {
    try {
        const response = await axiosInstance.put("api/movies/update", payload)
        return response.data
    } catch (error) {
        return error
    }
}