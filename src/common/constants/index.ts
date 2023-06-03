import { AnimalSearch, PaginatedData } from '@types'

export const APP_NAME = 'Goole'

export const GOOGLE_COLORS = {
    blue: '#4285F4',
    red: '#DB4437',
    yellow: '#F4B400',
    green: '#0F9D58',
}

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

export const GOOGLE_ANALYTICS_MEASUREMENT_ID = 'G-07BG7RYZSR'
