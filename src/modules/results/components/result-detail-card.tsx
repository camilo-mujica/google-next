import { AnimalSearch } from '@types'
import React, { useEffect, useState } from 'react'
import styles from './result-detail-card.module.scss'
/* eslint-disable @next/next/no-img-element */

interface Props {
    result: AnimalSearch | null
}
const ResultDetailCard = ({ result }: Props) => {
    const [isLoading, setIsLoading] = useState(false)
    const imageRef = React.useRef<HTMLImageElement>(null)

    useEffect(() => {
        if (imageRef.current && !imageRef.current.complete) {
            setIsLoading(true)
        }
    }, [result])

    useEffect(() => {
        console.log('isLoading', isLoading)
    }, [isLoading])

    return (
        <article
            className={`${styles.result_detail_card} ${
                result && styles.card_border
            }`}
        >
            {result && (
                <>
                    <div
                        className={`${styles.result_image_container} ${
                            isLoading && 'skeleton_animation'
                        }`}
                    >
                        <img
                            ref={imageRef}
                            src={result.image}
                            alt={result.title}
                            className={`${styles.result_image} ${
                                isLoading && styles.opacity_0
                            }`}
                            onLoad={() => setIsLoading(false)}
                        />
                    </div>
                    <a className={styles.result_url} href={result.url}>
                        {result.url}
                    </a>
                    <a className={styles.result_title} href={result.url}>
                        {result.title}
                    </a>
                    <p>{result.description}</p>
                </>
            )}
        </article>
    )
}

export default ResultDetailCard
