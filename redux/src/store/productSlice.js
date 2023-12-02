import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
    // reducers: {
    //     setProduct(state, action) {
    //         state.data = action.payload
    //     },
    //     setStatus(state, action) {
    //         state.status = action.payload
    //     }
    // },
    extraReducers: builder => {
        builder.addCase(fetchProduct.pending, state => {
            state.status = STATUS.LOADING
        }).addCase(fetchProduct.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = STATUS.SUCCESS
        }).addCase(fetchProduct.rejected, state => {
            state.data = []
            state.status = STATUS.ERROR
        })
    }
})

export const fetchProduct = createAsyncThunk('product', async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data
})

export const {setProduct, setStatus} = productSlice.actions
export default productSlice.reducer

// export const fetchProduct = () => {
//     return async function fetchProductThunk (dispatcher) {
//         dispatcher(setStatus(STATUS.LOADING))
//         try {
//             const response = await axios.get('https://fakestoreapi.com/products')
//             dispatcher(setProduct(response.data))
//             dispatcher(setStatus(STATUS.SUCCESS))
//         } catch (error) {
//             console.log(error)
//             dispatcher(setStatus(STATUS.ERROR))
//         }
//     }
// }