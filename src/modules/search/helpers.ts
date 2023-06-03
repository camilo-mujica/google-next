import { faker } from '@faker-js/faker'

// This function suggests random search terms based on the search term

export const getSuggestions = (search: string): string[] => {
    const suggestions: string[] = []

    const randomQuantity = Math.floor(Math.random() * 6) + 1

    if (search.length > 3 && search.length <= 30) {
        for (let i = 0; i < randomQuantity; i++) {
            suggestions.push(`${search} ${faker.animal.type()}`)
        }
    }

    return suggestions
}
