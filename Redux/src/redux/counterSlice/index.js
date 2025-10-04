import { createSlice } from '@reduxjs/toolkit'




const initialState: CounterState = {
    value: 0,
    counter: 10,
    name: "suman",
    product: [{ id: 1, title: "one+1" }, { id: 2, title: "one+2" }]
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },

    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer