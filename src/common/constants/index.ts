import { AnimalSearch, PaginatedData } from '@types'

export const APP_NAME = 'Goole'

export const ROUTES = {
    home: '/',
    results: '/resultados',
    notFound: '/404',
    googleAccount: 'https://myaccount.google.com/',
}

export const emptyPaginatedData: PaginatedData<AnimalSearch> = {
    items: [],
    meta: {
        itemCount: 0,
        totalItems: 0,
        itemsPerPage: 0,
        totalPages: 0,
        currentPage: 1,
    },
    links: {
        first: '',
        previous: '',
        next: '',
        last: '',
    },
}
