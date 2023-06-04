import { truncateString } from '@helpers'
import React from 'react'
import { IoMdSearch, IoMdTrash } from 'react-icons/io'
import { LuClock4 } from 'react-icons/lu'
import { useSearchHistory, useSuggestions } from '../hooks'
import styles from './searchbar-dropdown.module.scss'

interface Props {
    search: string
    setSearch: (search: string) => void
    setSearchHistoryItem: (searchHistoryItem: boolean) => void
    setShowdropdown: (showHistory: boolean) => void
    hasHistory?: boolean
}

const SearchbarDropdown = ({
    search,
    setSearch,
    setSearchHistoryItem,
    setShowdropdown,
    hasHistory = false,
}: Props) => {
    const { history, handleClearHistory } = useSearchHistory()
    const { suggestions } = useSuggestions(search)

    return (
        <div className={styles.search_history}>
            {!search && (
                <ul>
                    {history
                        .slice(0, 6)
                        .filter((item) => item !== search)
                        .map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => {
                                        setSearch(item)
                                        setShowdropdown(false)
                                        setSearchHistoryItem(true)
                                    }}
                                >
                                    <span className={styles.search_icon}>
                                        <LuClock4 />
                                    </span>
                                    <span className={styles.search_text}>
                                        {truncateString(item, 50)}
                                    </span>
                                </li>
                            )
                        })}
                </ul>
            )}

            {search && (
                <ul>
                    {suggestions.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => {
                                    setSearch(item)
                                    setShowdropdown(false)
                                    setSearchHistoryItem(true)
                                }}
                            >
                                <span className={styles.search_icon}>
                                    <IoMdSearch />
                                </span>
                                <span className={styles.search_text}>
                                    {truncateString(item, 50)}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            )}

            {hasHistory && (
                <div
                    className={styles.delete_history}
                    onClick={() => {
                        handleClearHistory()
                        setShowdropdown(false)
                    }}
                >
                    <IoMdTrash className={styles.delete_icon} />
                    <span className={styles.delete_text}>Borrar historial</span>
                </div>
            )}
        </div>
    )
}

export default SearchbarDropdown
