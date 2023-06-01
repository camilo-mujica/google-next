import React from 'react'
import { IoMdClose, IoMdSearch } from 'react-icons/io'
import styles from './searchbar.module.scss'

interface Props {
    search: string
    handleSearch: (search: string) => void
    handleSubmit: () => void
    fixedShadow?: boolean
}

const Searchbar = ({
    search,
    handleSearch,
    handleSubmit,
    fixedShadow,
}: Props) => {
    const handleReset = () => {
        handleSearch('')
    }
    return (
        <div
            className={`${styles.searchbar} ${
                fixedShadow && styles.fixed_shadow
            }`}
            onKeyUp={(e) => {
                if (e.key === 'Enter') handleSubmit()
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
            />
            <span className={styles.button} onClick={handleReset}>
                <IoMdClose
                    className={`${styles.search_reset_icon} ${
                        search && styles.active
                    }`}
                />
            </span>
        </div>
    )
}

export default Searchbar
