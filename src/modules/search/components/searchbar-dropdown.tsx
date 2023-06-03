import { truncateString } from '@helpers'
import React from 'react'
import { IoMdTrash } from 'react-icons/io'
import { LuClock4 } from 'react-icons/lu'
import { useSearchHistory } from '../hooks'
import styles from './searchbar-dropdown.module.scss'

interface Props {
    search: string
    setSearch: (search: string) => void
    setSearchHistoryItem: (searchHistoryItem: boolean) => void
    setShowdropdown: (showHistory: boolean) => void
}

const SearchbarDropdown = ({
    search,
    setSearch,
    setSearchHistoryItem,
    setShowdropdown,
}: Props) => {
    const { history, handleClearHistory } = useSearchHistory()

    return (
        <div className={styles.search_history}>
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

            <div
                className={styles.delete_history}
                onClick={() => {
                    handleClearHistory()
                    setShowdropdown(false)
                }}
            >
                <IoMdTrash className={styles.delete_icon} />
                <span>Borrar historial</span>
            </div>
        </div>
    )
}

export default SearchbarDropdown
