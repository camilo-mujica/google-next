import { emptyPaginatedData } from '@constants'
import { generatePaginatedData } from '@helpers'
import { NextApiRequest, NextApiResponse } from 'next'

// Description: This is the API route that will be called when the user searches for a query.

const ITEMS_PER_PAGE = 20

const searchHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { search: searchQuery, page: pageQuery = '1' } = req.query

    const parsedPage = parseInt(pageQuery as string, 10)

    if (isNaN(parsedPage) || parsedPage <= 0) {
        return res.status(400).json({
            statusCode: 400,
            error: 'Invalid page number',
            data: emptyPaginatedData,
        })
    }

    if (!searchQuery || searchQuery.length > 30) {
        return res.status(400).json({
            statusCode: 400,
            error: 'Invalid search query',
            data: emptyPaginatedData,
        })
    }

    const page = parsedPage > 0 ? parsedPage : 1
    const search = searchQuery as string

    const paginatedData = generatePaginatedData(page, search, ITEMS_PER_PAGE)

    return res.status(200).json({
        statusCode: 200,
        data: paginatedData,
    })
}

export default searchHandler
