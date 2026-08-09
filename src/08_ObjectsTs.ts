/**
 * ============================================================================
 * ? Structural Typing
 * ============================================================================
 *
 * * TypeScript checks the structure of objects rather than their names.
 *
 * * If an object has all the required properties of another type,
 * * it can be assigned to that type.
 */

const drinkItem = {
    name: "Mango Shake",
    price: 150,
    isCold: true
}


type JuiceInfo = {
    name: string
    price: number
    ingredients: string[]
}


const mangoJuiceInfo: JuiceInfo = {
    name: "Mango Juice",
    price: 70,
    ingredients: ["mango", "almonds", "milk", "ice"]
}


type CupInfo = {
    size: string
}


let smallCupInfo: CupInfo = {
    size: "250ml"
}


let bigCupInfo = {
    size: "500ml",
    material: "steel"
}


/**
 * * `bigCupInfo` contains the required `size` property.
 *
 * * The extra `material` property does not cause an error.
 *
 * * This works because TypeScript uses structural typing.
 */

smallCupInfo = bigCupInfo


/**
 * ============================================================================
 * ? Splitting Out Data Types
 * ============================================================================
 *
 * * Large object types can be split into smaller reusable types.
 */

type OrderItemInfo = {
    name: string
    quantity: number
}


type AddressInfo = {
    street: string
    pin: number
}


type CustomerOrderInfo = {
    id: string
    items: OrderItemInfo[]
    address: AddressInfo
}


/**
 * ============================================================================
 * ? Partial<T>
 * ============================================================================
 *
 * * `Partial<T>` makes all properties of a type optional.
 */

type ColdDrinkInfo = {
    name: string
    price: number
    isCold: boolean
}


const updateColdDrink = (updates: Partial<ColdDrinkInfo>) => {
    console.log("Updating Cold Drink with", updates)
}


updateColdDrink({ price: 150 })
updateColdDrink({ isCold: true })
updateColdDrink({})


/**
 * ============================================================================
 * ? Required<T>
 * ============================================================================
 *
 * * `Required<T>` makes all optional properties required.
 */

type ColdDrinkOrderInfo = {
    name?: string
    quantity?: number
}


const placeColdDrinkOrder = (
    order: Required<ColdDrinkOrderInfo>
) => {
    console.log(order)
}


placeColdDrinkOrder({
    name: "Mango Juice",
    quantity: 2
})


/**
 * ============================================================================
 * ? Pick<T, K>
 * ============================================================================
 *
 * * `Pick<T, K>` creates a new type containing only
 * * the selected properties from another type.
 *
 * * Here we only select:
 *
 * * - name
 * * - price
 */

type DrinkPreview = Pick<ColdDrinkInfo, "name" | "price">


const mangoDrinkPreview: DrinkPreview = {
    name: "Mango Juice",
    price: 70
}

/**
 * ============================================================================
 * ? Omit<T, K>
 * ============================================================================
 *
 * * `Omit<T, K>` creates a new type by removing selected
 * * properties from an existing type.
 *
 * * Here `isCold` is removed from the type.
 */

type DrinkDetails = {
    name: string
    price: number
    isCold: boolean
}


type DrinkWithoutCold = Omit<DrinkDetails, "isCold">


const drinkWithoutCold: DrinkWithoutCold = {
    name: "Mango Juice",
    price: 70
}