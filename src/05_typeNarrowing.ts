/**
 * ============================================================================
 * ? TYPESCRIPT TYPE NARROWING & TYPE GUARDS
 * ============================================================================
 *
 * * This file covers:
 *
 * * 1. typeof narrowing
 * * 2. Optional parameters
 * * 3. Literal types
 * * 4. instanceof narrowing
 * * 5. Custom type predicates
 * * 6. Discriminated unions
 * * 7. unknown + type guards
 *
 * ! Type narrowing means reducing a broad type into a more specific type
 * ! based on runtime checks.
 *
 * ============================================================================
 */


/**
 * ============================================================================
 * ? 1. typeof NARROWING
 * ============================================================================
 *
 * * `kind` can contain either:
 *
 * * - string
 * * - number
 *
 * * TypeScript initially sees:
 *
 * * kind: string | number
 *
 * * After checking `typeof kind === "string"`,
 * * TypeScript narrows `kind` to `string`.
 *
 * * Once the string case has been handled,
 * * TypeScript knows that the remaining value is a `number`.
 *
 * ============================================================================
 */

function getDrink(kind: number | string) {

    if (typeof kind === "string") {

        /**
         * * TypeScript has narrowed:
         *
         * * kind: string
         */

        return `Making ${kind} drink ...`
    }

    /**
     * * The string possibility has already been handled.
     *
     * * TypeScript now knows:
     *
     * * kind: number
     */

    return `Drink Order: ${kind}`
}


/**
 * ============================================================================
 * ? 2. OPTIONAL PARAMETERS
 * ============================================================================
 *
 * * `msg?: string` means the parameter is optional.
 *
 * * Therefore its actual type is:
 *
 * * string | undefined
 *
 * * The `if (msg)` condition narrows the value to a usable string.
 *
 * ============================================================================
 */

function serveDrink(msg?: string) {

    if (msg) {

        /**
         * * TypeScript knows:
         *
         * * msg: string
         */

        return `Serving ${msg}`
    }

    /**
     * * If `msg` is undefined or otherwise falsy,
     * * the default drink is served.
     */

    return `Serving default mango drink`
}


/**
 * ============================================================================
 * ? 3. LITERAL TYPES + NARROWING
 * ============================================================================
 *
 * * Literal types restrict a value to specific values.
 *
 * * Here `size` can be:
 *
 * * - "small"
 * * - "medium"
 * * - "larger"
 * * - number
 *
 * * TypeScript progressively eliminates possibilities
 * * as the conditions are checked.
 *
 * ============================================================================
 */

function orderDrink(
    size: "medium" | "small" | "larger" | number
) {

    if (size === "small") {

        /**
         * * TypeScript narrows:
         *
         * * size: "small"
         */

        return `Small Drink Package`
    }

    if (size === "medium" || size === "larger") {

        /**
         * * TypeScript narrows:
         *
         * * size: "medium" | "larger"
         */

        return `Make extra drinks`
    }

    /**
     * * The literal values have already been handled.
     *
     * * Therefore TypeScript knows that the remaining
     * * possibility is:
     *
     * * size: number
     */

    return `Drink Order: ${size}`
}


/**
 * ============================================================================
 * ? 4. instanceof NARROWING
 * ============================================================================
 *
 * * `instanceof` checks whether an object is an instance
 * * of a particular class.
 *
 * * This is especially useful when working with class-based
 * * object unions.
 *
 * ============================================================================
 */

class MangoDrink {

    /**
     * * Returns the message used when serving a mango drink.
     */

    serve() {
        return "Serving Mango Shake"
    }
}


class BananaDrink {

    /**
     * * Returns the message used when serving a banana drink.
     */

    serve() {
        return "Serving Banana Shake"
    }
}


/**
 * * The parameter can be either:
 *
 * * MangoDrink | BananaDrink
 */

function serve(drink: MangoDrink | BananaDrink) {

    if (drink instanceof MangoDrink) {

        /**
         * * TypeScript has narrowed:
         *
         * * drink: MangoDrink
         */

        return drink.serve()
    }

    /**
     * * MangoDrink has been eliminated.
     *
     * * TypeScript therefore knows:
     *
     * * drink: BananaDrink
     */

    return drink.serve()
}


/**
 * ============================================================================
 * ? 5. CUSTOM TYPE PREDICATES
 * ============================================================================
 *
 * * Built-in checks such as `typeof` and `instanceof` are sometimes
 * * not enough to validate an object.
 *
 * * We can create our own type guard.
 *
 * * The important syntax is:
 *
 * * value is SomeType
 *
 * * This is called a TYPE PREDICATE.
 *
 * * When the function returns true, TypeScript understands that
 * * the value can safely be treated as the specified type.
 *
 * ============================================================================
 */

type DrinkOrder = {
    type: string
    sugar: number
}


/**
 * * `unknown` is safer than `any`.
 *
 * * `unknown` means:
 *
 * * "We do not know what this value contains yet."
 *
 * * Before accessing its properties, we must validate it.
 *
 * @param obj Value whose type is unknown.
 * @returns True when the value is a valid DrinkOrder.
 */

function isDrinkOrder(obj: unknown): obj is DrinkOrder {

    return (
        typeof obj === "object" &&
        obj !== null &&
        "type" in obj &&
        "sugar" in obj &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}


/**
 * * The function accepts either:
 *
 * * - DrinkOrder
 * * - string
 */

function serveOrder(item: DrinkOrder | string) {

    if (isDrinkOrder(item)) {

        /**
         * * Because `isDrinkOrder()` returned true,
         * * TypeScript narrows:
         *
         * * item: DrinkOrder
         */

        return `Serving ${item.type} drink with ${item.sugar} spoons sugar`
    }

    /**
     * * DrinkOrder has been eliminated.
     *
     * * TypeScript now knows:
     *
     * * item: string
     */

    return `Serving custom drink ${item}`
}


/**
 * ============================================================================
 * ? 6. DISCRIMINATED UNIONS
 * ============================================================================
 *
 * * A discriminated union is a union where every object
 * * contains a common property used to identify its type.
 *
 * * In this example, the `type` property is the discriminator.
 *
 * * TypeScript can use the value of `type` to automatically
 * * narrow the object.
 *
 * ============================================================================
 */

type MangoDrinkOrder = {
    type: "mango"
    items: number
}


type BananaDrinkOrder = {
    type: "banana"
    amount: number
}


type ApricotDrinkOrder = {
    type: "apricot"
    glasses: number
}


/**
 * * Drink can be one of three different object types.
 */

type Drink =
    | MangoDrinkOrder
    | BananaDrinkOrder
    | ApricotDrinkOrder


/**
 * * `order.type` acts as the discriminator.
 *
 * @param order Drink order containing a specific drink type.
 * @returns Name of the drink being prepared.
 */

function makeDrink(order: Drink) {

    switch (order.type) {

        case "mango":

            /**
             * * TypeScript narrows:
             *
             * * order: MangoDrinkOrder
             */

            return "Mango Shake"


        case "banana":

            /**
             * * TypeScript narrows:
             *
             * * order: BananaDrinkOrder
             */

            return "Banana Shake"


        case "apricot":

            /**
             * * TypeScript narrows:
             *
             * * order: ApricotDrinkOrder
             */

            return "Apricot Shake"
    }
}


/**
 * ============================================================================
 * ? 7. unknown + ARRAY TYPE GUARD
 * ============================================================================
 *
 * * `unknown` is useful when receiving data whose type
 * * cannot be trusted.
 *
 * * Common examples:
 *
 * * - API responses
 * * - JSON data
 * * - User input
 * * - External libraries
 *
 * ! Never blindly assume that unknown data has the expected structure.
 *
 * ============================================================================
 */


/**
 * * Checks whether a value is an array containing only strings.
 *
 * * `arr is string[]` tells TypeScript:
 *
 * * If this function returns true,
 * * treat `arr` as a string array.
 *
 * @param arr Value to validate.
 * @returns True when arr is a string array.
 */

function isStringArray(arr: unknown): arr is string[] {

    return (
        Array.isArray(arr) &&
        arr.every(item => typeof item === "string")
    )
}


/**
 * ============================================================================
 * ? USING THE CUSTOM ARRAY TYPE GUARD
 * ============================================================================
 */

function processArray(value: unknown) {

    if (isStringArray(value)) {

        /**
         * * TypeScript now knows:
         *
         * * value: string[]
         *
         * * Therefore array methods and string methods
         * * can safely be used.
         */

        return value.map(item => item.toUpperCase())
    }

    /**
     * ! The value failed the type guard.
     */

    return "Not a string array"
}


/**
 * ============================================================================
 * ? TYPE NARROWING QUICK REFERENCE
 * ============================================================================
 *
 * * typeof
 * * --------------------------------------------------------------------------
 * * Used mainly for primitive values.
 *
 * * typeof value === "string"
 * * typeof value === "number"
 * * typeof value === "boolean"
 *
 *
 * * instanceof
 * * --------------------------------------------------------------------------
 * * Used with class instances.
 *
 * * value instanceof MangoDrink
 *
 *
 * * Equality checks
 * * --------------------------------------------------------------------------
 * * Useful with literal types and discriminated unions.
 *
 * * order.type === "mango"
 *
 *
 * * Custom type predicates
 * * --------------------------------------------------------------------------
 * * Used when built-in checks are not enough.
 *
 * * value is SomeType
 *
 *
 * * Array.isArray()
 * * --------------------------------------------------------------------------
 * * Checks whether a value is an array.
 *
 *
 * * `in` operator
 * * --------------------------------------------------------------------------
 * * Checks whether a property exists on an object.
 *
 * * "type" in obj
 *
 * ============================================================================
 */


/**
 * ============================================================================
 * ! IMPORTANT: TYPESCRIPT TYPES DO NOT EXIST AT RUNTIME
 * ============================================================================
 *
 * * TypeScript types are removed when the code is compiled to JavaScript.
 *
 * * For example:
 *
 * * function serve(order: DrinkOrder) {}
 *
 * * The TypeScript type annotation does NOT validate incoming data.
 *
 * * Runtime validation requires actual JavaScript operations such as:
 *
 * * - typeof
 * * - instanceof
 * * - Array.isArray()
 * * - `in`
 * * - Property checks
 * * - Custom type guards
 *
 * * This becomes especially important when working with:
 *
 * * - APIs
 * * - Databases
 * * - JSON
 * * - User input
 * * - External services
 *
 * ============================================================================
 */