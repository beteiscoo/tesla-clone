import { createSlice } from "@reduxjs/toolkit";
// redux is a stage and a slice is a piece of stage or a slice of pizza
const initialState = {
    cars: [ "Model S", "Model 3", "Model X", "Model Y" ]
}

const carSlice = createSlice({
    name: "Car",
    initialState,
    reducers: {}
})

// => mean to return
export const selectCars = state => state.car.cars

export default carSlice.reducer