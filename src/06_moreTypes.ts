/**
 * ? Type Assertion
 *
 * * Type assertion tells TypeScript to treat a value
 * * as a specific type.
 *
 * * Syntax:
 * * value as Type
 *
 * ! Type assertion does NOT convert the value at runtime.
 */

let response: any = "42"

let length: number = (response as string).length


/**
 * ? Type Assertion with Objects
 */

type Book = {
    name: string
}

let bookString = '{ "name": "Calculus" }'

let bookObject = JSON.parse(bookString) as Book

console.log(bookObject)


/**
 * ? DOM Type Assertion
 *
 * * getElementById() returns HTMLElement | null.
 * * We know this element is an input, so we assert
 * * it as HTMLInputElement.
 */

const inputElement =
    document.getElementById("username") as HTMLInputElement


/**
 * ? Error Narrowing
 *
 * * `error` can be any type.
 * * Check it before accessing `.message`.
 */

try {

} catch (error) {

    if (error instanceof Error) {
        console.log(error.message)
    }

    console.log("Error", error)
}


const data: unknown = "Shahnawaz"

const strData: string = data as string


/**
 * ============================================================================
 * ? never
 * ============================================================================
 *
 * * `never` represents a value that can never occur.
 *
 * * Commonly used for:
 *
 * * - Exhaustive checks
 * * - Infinite loops
 * * - Functions that always throw
 */


/**
 * ? Exhaustive Checking
 */

type Role = "admin" | "user"

function redirectBasedOnRole(role: Role): void {

    if (role === "admin") {
        console.log("Redirecting to Admin Dashboard")
        return
    }

    if (role === "user") {
        console.log("Redirecting to User Dashboard")
        return
    }

    /**
     * * All possible roles are handled.
     *
     * * Therefore:
     * * role: never
     */

    role
}


/**
 * ? Unhandled Union Case
 */

type NewRole = "admin" | "user" | "superadmin"

function redirectBasedOnRole2(role: NewRole): void {

    if (role === "admin") {
        console.log("Redirecting to Admin Dashboard")
        return
    }

    if (role === "user") {
        console.log("Redirecting to User Dashboard")
        return
    }

    /**
     * ! `superadmin` is still possible.
     *
     * * Therefore:
     * * role: "superadmin"
     *
     * ! It is NOT `never`.
     */

    role
}


/**
 * ? Function Returning never
 *
 * * This function never successfully returns
 * * because the loop never ends.
 */

function neverReturn(): never {

    while (true) {}
}


/**
 * ? Another Example
 *
 * * A function that always throws also returns `never`.
 */

function throwError(message: string): never {

    throw new Error(message)
}