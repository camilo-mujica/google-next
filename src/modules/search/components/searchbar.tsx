import React from 'react'
import { IoMdClose, IoMdSearch } from 'react-icons/io'
import { useSearchHistory } from '../internals'
import styles from './searchbar.module.scss'

interface Props {
    search: string
    handleSearch: (search: string) => void
    handleSubmit: () => void
    handleReset: () => void
    fixedShadow?: boolean
}

const Searchbar = ({
    search,
    handleSearch,
    handleSubmit,
    handleReset,
    fixedShadow,
}: Props) => {
    const { history, handleAddToHistory } = useSearchHistory()

    return (
        <section className={styles.searchbar}>
            <div
                className={`${styles.search_container} ${
                    fixedShadow && styles.fixed_shadow
                }`}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        handleSubmit()
                        console.log('history', history)
                        handleAddToHistory(search)
                    }
                }}
            >
                <span className={styles.button}>
                    <IoMdSearch className={styles.search_icon} />
                </span>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => handleSearch(e.target.value)}
                    className={styles.input}
                    onFocus={() => {
                        console.log('focus', history)
                    }}
                />
                <span className={styles.button} onClick={handleReset}>
                    <IoMdClose
                        className={`${styles.search_reset_icon} ${
                            search && styles.active
                        }`}
                    />
                </span>
            </div>
            {/* <div className={styles.search_history}></div> */}
        </section>
    )
}

export default Searchbar
