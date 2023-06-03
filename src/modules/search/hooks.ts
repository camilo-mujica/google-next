import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { useEffect, useState } from 'react'
import {
    addToHistory,
    clearHistory,
    getSuggestions,
    selectSearchHistory,
} from './internals'

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

// This hook is used to retrieve search suggestions based on the search term with a delay of 500ms by default.
export const useSuggestions = (search: string, delay = 500) => {
    const [suggestions, setSuggestions] = useState<string[]>([])

    useEffect(() => {
        // eslint-disable-next-line prefer-const
        let timer: NodeJS.Timeout | undefined

        const setSuggestionsWithDelay = (value: string) => {
            const newSuggestions = getSuggestions(value)
            setSuggestions(newSuggestions)
        }

        clearTimeout(timer)

        timer = setTimeout(() => {
            setSuggestionsWithDelay(search)
        }, delay)

        return () => {
            clearTimeout(timer)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    return { suggestions }
}
