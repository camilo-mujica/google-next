import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@redux/store'

type searchState = {
    history: string[]
}

const initialState: searchState = { history: [] }

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addToHistory(state, action: PayloadAction<string>) {
            state.history = [action.payload, ...state.history]
        },
    },
})

export const { addToHistory } = searchSlice.actions

export const selectSearchHistory = (state: RootState) => {
    return state.search.history
}

export default searchSlice.reducer
