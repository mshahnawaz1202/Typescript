/**
 * ============================================================================
 * ? Generics
 * ============================================================================
 *
 * * Generics allow us to write reusable code that works
 * * with different types while still maintaining type safety.
 *
 * * Instead of fixing a type, we use a type parameter such as:
 *
 * * T
 * * A
 * * B
 *
 * ============================================================================
 */


/**
 * ? Generic Function
 *
 * * `<T>` declares a generic type parameter.
 *
 * * TypeScript automatically determines the type of `T`
 * * from the argument passed to the function.
 */

function wrapInArray<T>(item: T): T[] {
    return [item]
}


wrapInArray("name")
wrapInArray(34)
wrapInArray({
    name: "shahnawaz",
    age: 20
})


/**
 * ============================================================================
 * ? Multiple Generic Types
 * ============================================================================
 *
 * * A function can have multiple generic type parameters.
 *
 * * Here:
 *
 * * A → type of first argument
 * * B → type of second argument
 *
 * * The return type is a tuple containing both types.
 */

function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b]
}


pair("shahnawaz", 30)

pair("Juice", {
    flavor: "mango"
})


/**
 * ============================================================================
 * ? Generic Interface
 * ============================================================================
 *
 * * Interfaces can also use generics.
 *
 * * `<T>` allows the interface to work with different types.
 */

interface Box<T> {
    context: T
}


const numberBox: Box<number> = {
    context: 10
}


const stringBox: Box<string> = {
    context: "10"
}


/**
 * ============================================================================
 * ? Generic API Response
 * ============================================================================
 *
 * * Generics are commonly used for API response types.
 *
 * * The response structure stays the same,
 * * while the type of `data` can change.
 */

interface ApiResponse<T> {
    status: number
    data: T
}


const userResponse: ApiResponse<string> = {
    status: 200,
    data: "Shahnawaz"
}


const numberResponse: ApiResponse<number> = {
    status: 200,
    data: 100
}