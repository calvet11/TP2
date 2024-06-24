import { faker } from "@faker-js/faker"

const randomProduct = () => ({
    id: faker.number.int({ min: 1, max: 10 }),
    name: faker.string.alphanumeric(20),
})

export default {
    randomProduct
}