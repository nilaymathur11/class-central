import { configureStore } from '@reduxjs/toolkit'
import CourseSlice from './slices/CourseSlice/CourseSlice'

export const store = configureStore({
  reducer: {
    courses: CourseSlice
  },
})