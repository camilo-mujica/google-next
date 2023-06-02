import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@redux/store'

type searchState = {
    history: string[]
}

const storedHistory =
    typeof localStorage !== 'undefined'
        ? localStorage.getItem('searchHistory')
        : null
const parsedHistory = storedHistory ? JSON.parse(storedHistory) : []

const initialState: searchState = { history: parsedHistory }

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addToHistory(state, action: PayloadAction<string>) {
            const updatedHistory = [action.payload, ...state.history]

            if (typeof localStorage !== 'undefined') {
                localStorage.setItem(
                    'searchHistory',
                    JSON.stringify(updatedHistory),
                )
            }

            state.history = updatedHistory
        },
        clearHistory(state) {
            if (typeof localStorage !== 'undefined') {
                localStorage.removeItem('searchHistory')
            }

            state.history = []
        },
    },
})

export const { addToHistory, clearHistory } = searchSlice.actions

export const selectSearchHistory = (state: RootState) => {
    return state.search.history
}

export default searchSlice.reducer
