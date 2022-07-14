import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchField: '',
}

const searchFieldSlice = createSlice({
  name: 'searchField',
  initialState,
  reducers: {
    setSearchField(state, action) {
      // it's okay to do this because immer makes it immmutable under the hood
      state.searchField = action.payload
    },
  },
})

export const { setSearchField } = searchFieldSlice.actions
export default searchFieldSlice.reducer
