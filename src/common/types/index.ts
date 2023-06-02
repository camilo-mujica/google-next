export type ApiResponse<T> = {
    statusCode: number
    message?: string | null
    error?: string | boolean | []
    data?: T
}

export type PaginatedData<T> = {
    items: T[]
    meta: {
        itemCount: number
        totalItems: number
        itemsPerPage: number
        totalPages: number
        currentPage: number
    }
    links: {
        first: string
        previous: string
        next: string
        last: string
    }
}

export type AnimalSearch = {
    type: string
    id: number
    url: string
    title: string
    description: string
    image: string
}
