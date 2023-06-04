import { useOutsideClick } from '@hooks'
import React, { useEffect, useState } from 'react'
import { IoMdClose, IoMdSearch } from 'react-icons/io'
import { useSearchHistory } from '../internals'
import SearchbarDropdown from './searchbar-dropdown'
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
    const { history, handleAddToHistory } = useSearchHistory()
    const [showDropdown, setShowdropdown] = useState(false)
    const ref = useOutsideClick<HTMLDivElement>(() => setShowdropdown(false))
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
                showDropdown && styles.show_search_history
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
                        setShowdropdown(false)
                    }
                }}
            >
                <span className={styles.button}>
                    <IoMdSearch className={styles.search_icon} />
                </span>
                <input
                    data-testid="search-input"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className={styles.input}
                    onClick={() => {
                        if (allowShowHistory) {
                            setShowdropdown(true)
                        }
                    }}
                />
                <span
                    data-testid="reset-button"
                    className={styles.button}
                    onClick={() => {
                        handleReset()
                        setShowdropdown(false)
                    }}
                >
                    <IoMdClose
                        className={`${styles.search_reset_icon} ${
                            search && styles.active
                        }`}
                    />
                </span>
            </div>

            {showDropdown && (
                <SearchbarDropdown
                    search={search}
                    setSearch={setSearch}
                    setSearchHistoryItem={setSearchHistoryItem}
                    setShowdropdown={setShowdropdown}
                    hasHistory={history.length > 0}
                />
            )}
        </section>
    )
}

export default Searchbar
