import { configureStore } from '@reduxjs/toolkit'

import searchFieldReducer from '../features/searchField/searchFieldSlice'
import { robotsApiSlice } from '../features/robotsApi/robotsApiSlice'

const store = configureStore({
  reducer: {
    searchField: searchFieldReducer,
    [robotsApiSlice.reducerPath]: robotsApiSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(robotsApiSlice.middleware)
  },
})

export default store
