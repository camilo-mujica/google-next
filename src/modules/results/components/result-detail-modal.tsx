import useWindowDimensions, { useOutsideClick } from '@hooks'
import { AnimalSearch } from '@types'
import React, { useEffect, useState } from 'react'
import ResultDetailCard from './result-detail-card'
import styles from './result-detail-modal.module.scss'

interface Props {
    result: AnimalSearch | null
}

const ResultDetailModal = ({ result }: Props) => {
    const [open, setOpen] = useState(false)
    const modalRef = useOutsideClick<HTMLDivElement>(() => setOpen(false))
    const { width } = useWindowDimensions()

    useEffect(() => {
        if (result) {
            setOpen(true)
        }
    }, [result])

    useEffect(() => {
        if (open && width && width < 1024) {
            document.body.style.overflow = 'hidden'
        } else if (!open && width && width < 1024) {
            document.body.style.overflow = 'auto'
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open])

    useEffect(() => {
        if (width && width > 1024) {
            setOpen(false)
        }
    }, [width])

    return (
        <section
            className={`${styles.result_detail_modal} ${open && styles.open}`}
        >
            <div ref={modalRef}>
                <ResultDetailCard result={result} />
            </div>
        </section>
    )
}

export default ResultDetailModal
