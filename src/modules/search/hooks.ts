import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { addToHistory, clearHistory, selectSearchHistory } from './internals'

// This hook is used to add a search term to the search history and retrieve the current search history.
export const useSearchHistory = () => {
    const dispatch = useAppDispatch()
    const history = useAppSelector(selectSearchHistory)

    const handleAddToHistory = (term: string) => {
        dispatch(addToHistory(term))
    }

    const handleClearHistory = () => {
        dispatch(clearHistory())
    }

    return { history, handleAddToHistory, handleClearHistory }
}
