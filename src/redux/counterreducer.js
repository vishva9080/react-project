import { createSlice } from "@reduxjs/toolkit"
export const counterslice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        dynamicvalue:(state,action)=>{
state.value += action.payload
        }
    },
})
export const { increment, decrement,dynamicvalue } = counterslice.actions
export const selectcount = (state) => state.counter.value

export default counterslice.reducer