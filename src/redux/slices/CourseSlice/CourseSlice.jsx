import { createSlice } from "@reduxjs/toolkit";

const CourseSlice = createSlice({
    name:"Courses",
    initialState: [],
    reducers: {
        addCourse: (state,action)=>{
            state.push(action.payload)
        }
    }
})
export const { addCourse } = CourseSlice.actions
export default CourseSlice.reducer;