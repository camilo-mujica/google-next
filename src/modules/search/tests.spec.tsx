import '@testing-library/jest-dom'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import { act, renderHook } from '@testing-library/react'
import { renderWithProviders } from '@utils'
import { getSuggestions, Searchbar, useSuggestions } from './internals'

describe('getSuggestions', () => {
    test('Return empty suggestions', () => {
        const suggestions = getSuggestions('')
        expect(suggestions).toHaveLength(0)
    })

    const searchTerm = 'animal'

    test('Return up to 6 suggestions', () => {
        const suggestions = getSuggestions(searchTerm)

        expect(suggestions.length).toBeGreaterThanOrEqual(1)
        expect(suggestions.length).toBeLessThanOrEqual(6)
    })

    test('Contain initial search term', () => {
        const suggestions = getSuggestions(searchTerm)

        const containSearchTerm = suggestions.every((suggestion) =>
            suggestion.includes(searchTerm),
        )

        expect(containSearchTerm).toBe(true)
    })
})

describe('useSuggestions', () => {
    const searchTerm = 'snake'

    test('should update suggestions after delay', async () => {
        jest.useFakeTimers()

        const { result } = renderHook(() => useSuggestions(searchTerm))

        expect(result.current.suggestions).toEqual([])

        act(() => {
            jest.runAllTimers()
        })

        await waitFor(() => {
            expect(result.current.suggestions.length).toBeGreaterThanOrEqual(1)
        })
    })
})

describe('Searchbar', () => {
    let searchTerm = ''
    const setSearch = (search: string) => {
        searchTerm = search
    }

    beforeEach(() => {
        searchTerm = ''
    })

    test('should update search term', () => {
        renderWithProviders(
            <Searchbar
                search={searchTerm}
                setSearch={setSearch}
                handleSubmit={() => undefined}
                handleReset={() => setSearch('')}
            />,
            // {preloadedState:{search: {history:[]}}},
        )

        const inputElement = screen.getByTestId('search-input')
        const resetButtonElement = screen.getByTestId('reset-button')

        fireEvent.change(inputElement, { target: { value: 'animal' } })

        expect(searchTerm).toBe('animal')

        fireEvent.click(resetButtonElement)

        expect(searchTerm).toBe('')
    })

    test('should call handleSubmit when Enter key is pressed', () => {
        const handleSubmit = jest.fn()
        renderWithProviders(
            <Searchbar
                search={searchTerm}
                setSearch={setSearch}
                handleSubmit={handleSubmit}
                handleReset={() => setSearch('')}
            />,
        )

        const inputElement = screen.getByTestId('search-input')

        fireEvent.keyUp(inputElement, { key: 'Enter' })

        expect(handleSubmit).toHaveBeenCalledTimes(1)
    })
})
