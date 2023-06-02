import { truncateString } from '@helpers'
import { useOutsideClick } from '@hooks'
import React, { useEffect, useState } from 'react'
import { IoMdClose, IoMdSearch, IoMdTrash } from 'react-icons/io'
import { LuClock4 } from 'react-icons/lu'
import { useSearchHistory } from '../internals'
import styles from './searchbar.module.scss'

interface Props {
    search: string
    setSearch: (search: string) => void
    handleSubmit: () => void
    handleReset: () => void
    fixedShadow?: boolean
    allowShowHistory?: boolean
}

const Searchbar = ({
    search,
    setSearch,
    handleSubmit,
    handleReset,
    fixedShadow,
    allowShowHistory = false,
}: Props) => {
    const { history, handleAddToHistory, handleClearHistory } =
        useSearchHistory()
    const [showHistory, setShowHistory] = useState(false)
    const ref = useOutsideClick<HTMLDivElement>(() => setShowHistory(false))
    const [searchHistoryItem, setSearchHistoryItem] = useState<boolean>(false)

    useEffect(() => {
        if (searchHistoryItem) {
            handleAddToHistory(search)
            handleSubmit()
            setSearchHistoryItem(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchHistoryItem])

    return (
        <section
            className={`${styles.searchbar} ${
                showHistory && styles.show_search_history
            } `}
            ref={ref}
        >
            <div
                className={`${styles.search_container} ${
                    fixedShadow && styles.fixed_shadow
                }`}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        handleSubmit()
                        handleAddToHistory(search)
                        setShowHistory(false)
                    }
                }}
            >
                <span className={styles.button}>
                    <IoMdSearch className={styles.search_icon} />
                </span>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className={styles.input}
                    onFocus={() => {
                        if (history.length > 0 && allowShowHistory) {
                            setShowHistory(true)
                        }
                    }}
                />
                <span
                    className={styles.button}
                    onClick={() => {
                        handleReset()
                        setShowHistory(false)
                    }}
                >
                    <IoMdClose
                        className={`${styles.search_reset_icon} ${
                            search && styles.active
                        }`}
                    />
                </span>
            </div>
            {showHistory && (
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
                                            setShowHistory(false)
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
                            setShowHistory(false)
                        }}
                    >
                        <IoMdTrash className={styles.delete_icon} />
                        <span>Borrar historial</span>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Searchbar
