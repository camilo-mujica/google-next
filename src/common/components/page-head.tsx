import { APP_NAME } from '@constants'
import Head from 'next/head'
import React from 'react'

export enum MetaRobotsDirective {
    INDEX_FOLLOW = 'index, follow', // Permitir indexación y seguir enlaces
    NOINDEX_FOLLOW = 'noindex, follow', // Impedir indexación pero permitir seguir enlaces
    INDEX_NOFOLLOW = 'index, nofollow', // Permitir indexación pero impedir seguir enlaces
    NOINDEX_NOFOLLOW = 'noindex, nofollow', // Impedir indexación y seguir enlaces
    NOARCHIVE = 'noarchive', // Impedir almacenamiento en caché
    NOSNIPPET = 'nosnippet', // Impedir la visualización de fragmentos en los resultados de búsqueda
}

// Description: This enum is used to define the Twitter Card types
export enum TwitterCardType {
    SUMMARY = 'summary',
    SUMMARY_LARGE_IMAGE = 'summary_large_image',
}

interface HeadProps {
    title?: string
    description?: string
    canonical?: string | null
    robots?: MetaRobotsDirective[]
    ogTitle?: string
    ogDescription?: string
    ogImage?: string
    twitterDescription?: string
    twitterCard?: TwitterCardType
    twitterImage?: string
    ogImageAlt?: string
}

const defaultDescription = `Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for. [THIS IS A TECHNICAL TEST]`

const defaultOgDescription = `Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for. [THIS IS A TECHNICAL TEST]`

const defaultOgImage = '/assets/images/og.png'

const defaultProps: HeadProps = {
    title: `Google`,
    description: defaultDescription,
    canonical: null,
    // TODO: Change this when launching to production
    robots: [MetaRobotsDirective.INDEX_FOLLOW],
    ogTitle: `Google`,
    ogDescription: defaultOgDescription,
    ogImage: defaultOgImage,
    twitterDescription: defaultOgDescription,
    twitterCard: TwitterCardType.SUMMARY_LARGE_IMAGE,
    twitterImage: defaultOgImage,
    ogImageAlt: `Logo de ${APP_NAME}`,
}

const PageHead = ({
    title: title = defaultProps.title,
    description = defaultProps.description,
    canonical = defaultProps.canonical,
    robots = defaultProps.robots,
    ogTitle = defaultProps.ogTitle,
    ogDescription = defaultProps.ogDescription,
    ogImage = defaultProps.ogImage,
    twitterDescription = defaultProps.twitterDescription,
    twitterCard = defaultProps.twitterCard,
    twitterImage = defaultProps.twitterImage,
    ogImageAlt = defaultProps.ogImageAlt,
}: HeadProps) => {
    return (
        <Head>
            {/* Page title */}
            <title>{title}</title>

            {/* Page description */}
            <meta name="description" content={description} key="description" />

            {/* Canonical URL if necessary */}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Robots meta tag */}
            <meta name="robots" content={robots?.join(', ')} key="robots" />

            {/* Open Graph meta tags */}
            <meta property="og:title" content={ogTitle} key="og:title" />
            <meta
                property="og:description"
                content={ogDescription}
                key="og:description"
            />
            <meta property="og:image" content={ogImage} key="og:image" />

            <meta
                property="og:image:alt"
                content={ogImageAlt}
                key="og:image:alt"
            />

            {/* <meta
				property='og:image'
				content={`/assets/images/test.png?${Date.now()}`}
				key='og:image'
			/> */}

            {canonical && (
                <meta property="og:url" content={canonical} key="og:url" />
            )}

            <meta property="og:type" content="website" />

            {/* Twitter meta tags */}
            <meta name="twitter:title" content={ogTitle} key="twitter:title" />
            <meta
                name="twitter:description"
                content={twitterDescription}
                key="twitter:description"
            />

            <meta
                name="twitter:card"
                content={twitterCard}
                key="twitter:card"
            />

            <meta
                name="twitter:image"
                content={twitterImage}
                key="twitter:image"
            />

            {/* Others meta tags */}
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
        </Head>
    )
}

export default PageHead
