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

export const AddMovie = async (payload) => {
    try {
        console.log(payload)
        const response = await axiosInstance.post("api/movies/add", payload)
        console.log(response)
        return response.data
    } catch (error) {
        return error
    }
}