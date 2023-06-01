import React from 'react'
import styles from './layout.module.scss'

interface Props {
    children: React.ReactNode
}
const PrimaryLayout = ({ children }: Props) => {
    return (
        <>
            <section className={styles.layout_container}>{children}</section>
        </>
    )
}

export default PrimaryLayout
