const { axiosInstance } = require('.')

export const GetAllTheatresByOwner = async (userId) => {
    try {
        const response = await axiosInstance.get(`api/theatre/getAllTheatresByOwnerId/${userId}`)
        return response.data
    } catch (error) {
        return error
    }    
}

export const GetTheatresByMovie = async (payload) => {
    try {
        const response = await axiosInstance.post(`/api/theatre/getTheatresByMovieId`, payload)
        return response.data
    } catch (error) {
        return error
    }
}


export const GetAllTheatres = async () => {
    try {
        const response = await axiosInstance.get('api/theatre/getAllTheatres')
        return response.data
    } catch (error) {
        return error
    }    
}

export const AddTheatre = async (payload) => {
    try {
        const response = await axiosInstance.post("api/theatre/add", payload)
        return response.data
    } catch (error) {
        return error
    }
}

export const DeleteTheatre = async (payload) => {
    try {
        console.log(payload)
        const response = await axiosInstance.post("api/theatre/delete", payload)
        return response.data
    } catch (error) {
        return error
    }
}

export const UpdateTheatre = async (payload) => {
    try {
        const response = await axiosInstance.put("api/theatre/update", payload)
        return response.data
    } catch (error) {
        return error
    }
}