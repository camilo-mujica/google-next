import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { addToHistory, selectSearchHistory } from './internals'

// This hook is used to add a search term to the search history and retrieve the current search history.
export const useSearchHistory = () => {
    const dispatch = useAppDispatch()
    const history = useAppSelector(selectSearchHistory)

    const handleAddToHistory = (term: string) => {
        dispatch(addToHistory(term))
    }

    return { history, handleAddToHistory }
}
