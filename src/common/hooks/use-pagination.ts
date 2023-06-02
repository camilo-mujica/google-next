import { useEffect, useState } from 'react'

interface Props {
	defaultLimit?: number
	pageQuery?: number
}
const usePagination = (props?: Props) => {
	// TODO: Change default limit to 20
	const [limit, setLimit] = useState(props?.defaultLimit || 20)
	const [page, setPage] = useState(props?.pageQuery || 1)
	const [totalElements, setTotalElements] = useState(0)
	const [totalPages, setTotalPages] = useState(1)

	const handlePageChange = (page: number) => {
		setPage(page)
	}

	const handleLimitChange = (limit: number) => {
		setLimit(limit)
	}

	const handleTotalChange = (total: number) => {
		setTotalElements(total)
	}

	useEffect(() => {
		const totalPages = totalElements > 0 ? Math.ceil(totalElements / limit) : 0
		setTotalPages(totalPages)

		// if (page > totalPages) {
		// 	setPage(totalPages)
		// }
	}, [totalElements, limit, page])

	return {
		page,
		limit,
		totalElements,
		totalPages,
		handlePageChange,
		handleLimitChange,
		handleTotalChange
	}
}

export default usePagination
