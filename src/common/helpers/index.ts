import { emptyPaginatedData } from '@constants'
import { faker } from '@faker-js/faker'
import { AnimalSearch, PaginatedData } from '@types'

// Description: This function generates fake animal data
export const generateAnimalData = (): AnimalSearch => {
    const type = faker.animal.type()
    return {
        type,
        id: faker.datatype.number(),
        url: faker.internet.url(),
        title:
            type in faker.animal
                ? faker.animal[type as keyof typeof faker.animal]()
                : '',
        description: faker.lorem.sentences(),
        image: faker.image.urlLoremFlickr({
            category: 'animals',
            width: 644,
            height: 362,
        }),
    }
}

// Description: This function generates an array of fake animal data
export const generateAnimalDataArray = (
    itemsPerPage: number,
): AnimalSearch[] => {
    const data = []
    for (let i = 0; i < itemsPerPage; i++) {
        const animal = generateAnimalData()
        data.push(animal)
    }

    return data
}

// Description: This function generates paginated data

export const generatePaginatedData = (
    page: number,
    search: string,
    itemsPerPage = 20,
): PaginatedData<AnimalSearch> => {
    if (search === '' || /^\d+$/.test(search)) {
        // Return empty results if search is empty or contains a number
        return emptyPaginatedData
    }

    // Generate animal data
    const data: AnimalSearch[] = generateAnimalDataArray(itemsPerPage)

    // Calculate pagination metadata
    const totalItems = itemsPerPage * 10 // Total number of items
    const totalPages = Math.ceil(totalItems / itemsPerPage) // Total number of pages

    // Calculate links for pagination
    const links = {
        first: `/api/search?search=${search}&page=1`,
        previous: '',
        next: '',
        last: `/api/search?search=${search}&page=${totalPages}`,
    }

    if (page > 1) {
        links.previous = `/api/search?search=${search}&page=${page - 1}`
    }

    if (page < totalPages) {
        links.next = `/api/search?search=${search}&page=${page + 1}`
    }

    return {
        items: data,
        meta: {
            itemCount: itemsPerPage,
            totalItems,
            itemsPerPage: itemsPerPage,
            totalPages,
            currentPage: page,
        },
        links,
    }
}
