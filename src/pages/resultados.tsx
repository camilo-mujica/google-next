import { PageHead } from '@components'
import { ROUTES } from '@constants'
import { ResultsScreen } from '@modules/results'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import React from 'react'

const ResultsPage = ({
    q = '',
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <PageHead title={`${q} - Buscar con Google`}></PageHead>
            <ResultsScreen></ResultsScreen>
        </>
    )
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
    const { q } = query

    if (!q) {
        return {
            redirect: {
                destination: ROUTES.home,
                permanent: false,
            },
        }
    }

    if (Array.isArray(q)) {
        return {
            props: {
                q: q[0],
            },
        }
    }

    return {
        props: {
            q,
        },
    }
}

export default ResultsPage
