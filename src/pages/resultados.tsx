import { PageHead } from '@components'
import { ResultsScreen } from '@modules/results'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import React from 'react'

const ResultsPage = ({
    q = '',
    page = 1,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <PageHead title={`${q || 'Buscar'} - Buscar con Google`}></PageHead>
            <ResultsScreen initialSearch={q} page={page} />
        </>
    )
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
    const { q, page } = query
    let searchQuery = q
    let pageQuery = page

    if (Array.isArray(searchQuery)) {
        searchQuery = searchQuery[0]
    }

    if (Array.isArray(pageQuery)) {
        pageQuery = pageQuery[0]
    }

    return {
        props: {
            q: searchQuery || '',
            page:
                pageQuery && !isNaN(parseInt(pageQuery))
                    ? parseInt(pageQuery)
                    : 1,
        },
    }
}

export default ResultsPage
