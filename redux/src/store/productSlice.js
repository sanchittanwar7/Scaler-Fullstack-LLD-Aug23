import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUS = {
    SUCCESS: 'success',
    ERROR: 'error',
    LOADING: 'loading'
}

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUS.SUCCESS
    },
    reducers: {
        setProduct(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        }
    }
})

export const fetchProduct = () => {
    return async function fetchProductThunk (dispatcher) {
        dispatcher(setStatus(STATUS.LOADING))
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            dispatcher(setProduct(response.data))
            dispatcher(setStatus(STATUS.SUCCESS))
        } catch (error) {
            console.log(error)
            dispatcher(setStatus(STATUS.ERROR))
        }
        
    }
}

export const {setProduct, setStatus} = productSlice.actions
export default productSlice.reducer