import { emptyPaginatedData, ROUTES } from '@constants'
import useWindowDimensions from '@hooks'
import { AnimalSearch, Metadata } from '@types'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useGetResultsQuery } from './internals'

interface useGetResultsProps {
    search: string
    page: number
}

// This hook is used to get the results from the API, it also handles the pagination in the URL, and the search detail
export const useSearchResults = ({ search, page }: useGetResultsProps) => {
    const router = useRouter()
    const [results, setResults] = useState<AnimalSearch[]>([])
    const [detail, setDetail] = useState<AnimalSearch | null>(null)
    const [metadata, setMetadata] = useState<Metadata>(emptyPaginatedData.meta)
    const [showNoResults, setShowNoResults] = useState(false)
    const { width } = useWindowDimensions()

    const [previousSearch, setPreviousSearch] = useState('')

    const { data, isLoading, isFetching, isError } = useGetResultsQuery(
        {
            search,
            page,
        },
        { refetchOnMountOrArgChange: true },
    )

    useEffect(() => {
        if (
            !isError &&
            data &&
            data.data?.items &&
            data.data.items.length > 0
        ) {
            if (width && width <= 768 && search === previousSearch) {
                setResults([...results, ...data.data.items])
            } else {
                setResults(data.data.items)
                window.scrollTo({ top: 0 })
            }

            setShowNoResults(data.data.items.length === 0)
            setMetadata(data.data.meta)
        } else {
            setResults([])
            // show no results only if there is an error and there is a search
            setShowNoResults(!!(isError && search))
            setMetadata(emptyPaginatedData.meta)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, isLoading, isFetching])

    useEffect(() => {
        setPreviousSearch(search)
    }, [search])

    useEffect(() => {
        if (search) {
            if (page && page > 1) {
                router.push(
                    `${ROUTES.results}?q=${search}&page=${page}`,
                    undefined,
                    {
                        shallow: true,
                    },
                )
            } else {
                router.push(`${ROUTES.results}?q=${search}`, undefined, {
                    shallow: true,
                })
            }
        } else {
            setDetail(null)
            setShowNoResults(false)
            setResults([])
            router.push(`${ROUTES.results}`, undefined, { shallow: true })
        }

        setDetail(null)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, page])

    return {
        results,
        isLoading,
        isFetching,
        isError,
        metadata,
        detail,
        setDetail,
        showNoResults,
    }
}
