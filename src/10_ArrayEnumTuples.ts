/**
 * ============================================================================
 * ? Arrays
 * ============================================================================
 *
 * * An array stores multiple values of the same type.
 *
 * * Syntax:
 * * Type[]
 * * Array<Type>
 */

const flavors: string[] = [
    "Mango",
    "Chocolate",
    "Apple",
    "Banana",
    "Orange"
]


const prices: number[] = [
    150,
    180,
    290,
    130,
    170
]


/**
 * * `Array<Type>` is another way to define an array.
 *
 * ! `Array` alone is not a complete type.
 */

const ratings: Array<number> = [
    3.3,
    4.5,
    4.9,
    3,
    2,
    2.6
]


/**
 * ? Array of Objects
 */

type JuiceInfo = {
    name: string
    price: number
}


const menu: JuiceInfo[] = [
    {
        name: "Mango",
        price: 250
    },
    {
        name: "Banana",
        price: 120
    }
]


/**
 * ? Readonly Arrays
 *
 * * `readonly` prevents modifications to the array.
 *
 * ! Methods such as push(), pop(), and splice() are not allowed.
 */

const cities: readonly string[] = [
    "FSD",
    "CHT"
]

/**
 * ! cities.push("TTK")
 * ! Property 'push' does not exist on type 'readonly string[]'.
 */


/**
 * ============================================================================
 * ? 2D Array
 * ============================================================================
 *
 * * A 2D array is an array containing other arrays.
 */

const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]


/**
 * ============================================================================
 * ? Tuples
 * ============================================================================
 *
 * * A tuple is an array with a fixed number of elements
 * * where each position has a specific type.
 */

let tuple1: [string, number]

tuple1 = ["Mango", 150]


/**
 * ? Optional Tuple Elements
 *
 * * `?` makes the last tuple element optional.
 */

let userInfo: [string, number, boolean?]

userInfo = ["shahnawaz", 20, true]
userInfo = ["shahnawaz", 20]


/**
 * ? Readonly Tuples
 *
 * * `readonly` prevents modification of the tuple.
 */

const locationInfo: readonly [number] = [23]


/**
 * ? Named Tuples
 *
 * * Names make tuple elements easier to understand.
 */

const items: [name: string, price: number] = [
    "Masala",
    30
]


/**
 * ============================================================================
 * ? Enums
 * ============================================================================
 *
 * * An enum is used to define a set of named constants.
 */

enum GlassSize {
    SMALL,
    MEDIUM,
    LARGE
}


const size = GlassSize.MEDIUM


/**
 * ? Auto-Incremental Values
 *
 * * Numeric enums automatically increment their values
 * * when the next members do not have an explicit value.
 */

enum Status {
    PENDING = 100,
    SUCCESS,
    CANCELLED
}

/**
 * * PENDING   = 100
 * * SUCCESS   = 101
 * * CANCELLED = 102
 */


/**
 * ? String Enums
 *
 * * String enums require an explicit value for each member.
 */

enum ShakeType {
    MANGO = "mango",
    APPLE = "apple",
    CHOCOLATE = "chocolate"
}


function makeShake(type: ShakeType) {
    console.log(`Making ${type}`)
}


makeShake(ShakeType.CHOCOLATE)