/**
 * ============================================================================
 * ? Any vs Unknown
 * ============================================================================
 *
 * ? Any
 *
 * * `any` disables TypeScript's type checking.
 *
 * * It can hold any type of value.
 *
 * * You can access properties and call methods without
 * * performing type checks.
 *
 * * It can also be assigned to variables of other types.
 *
 * * Example:
 *
 * * let value: any = "Hello"
 * * value.toUpperCase()
 * * value.someMethod()
 *
 * ! TypeScript will not report an error, even if the operation
 * ! is invalid for the actual value.
 *
 *
 * ? Unknown
 *
 * * `unknown` can also hold any type of value.
 *
 * * Unlike `any`, you cannot directly use an `unknown` value.
 *
 * * You must first narrow or check its type before using it.
 *
 * * It cannot be safely assigned to a specific type without
 * * first narrowing or validating the value.
 *
 * * Example:
 *
 * * let value: unknown = "Hello"
 *
 * * value.toUpperCase()
 * * This produces a TypeScript error.
 *
 * * if (typeof value === "string") {
 * *     value.toUpperCase()
 * * }
 *
 *
 * ? Main Difference
 *
 * * `any`
 * *     -> "I don't care about the type."
 *
 * * `unknown`
 * *     -> "I don't know the type, so check it first."
 *
 *
 * ? Rule
 *
 * * Prefer `unknown` when the type of a value is not known.
 *
 * ! Use `any` only when you intentionally want to disable
 * ! TypeScript's type checking.
 *
 * ============================================================================
 */


/**
 * ============================================================================
 * ? any Example
 * ============================================================================
 *
 * * A variable with the `any` type can store values
 * * of completely different types.
 */

let value: any

value = 2.5
value = [3, 4, 5]
value = "drink"
value = 4


/**
 * ! TypeScript does not give an error here.
 *
 * * At this point, `value` contains a number.
 *
 * * However, `toUpperCase()` is a string method.
 *
 * * Because the variable is typed as `any`, TypeScript
 * * allows the operation without checking the actual type.
 *
 * ! The error can occur only at runtime.
 */

value.toUpperCase()


/**
 * ============================================================================
 * ? unknown Example
 * ============================================================================
 *
 * * `unknown` can also store values of different types.
 *
 * * However, TypeScript does not allow us to use the value
 * * directly because its actual type is unknown.
 */

let newValue: unknown

newValue = 2.5
newValue = [3, 4, 5]
newValue = "drink"
newValue = 4


/**
 * ! The following would produce a TypeScript error:
 *
 * * newValue.toUpperCase()
 *
 * * Why?
 *
 * * TypeScript does not know whether `newValue` is:
 *
 * * - string
 * * - number
 * * - array
 * * - object
 * * - boolean
 * * - etc.
 *
 * * Therefore, we must first check its type.
 */


/**
 * ============================================================================
 * ? Narrowing unknown
 * ============================================================================
 *
 * * `typeof` is used to narrow the type of `newValue`.
 *
 * * Once TypeScript confirms that the value is a string,
 * * string methods can safely be used.
 */

if (typeof newValue === "string") {

    /**
     * * TypeScript now knows:
     *
     * * newValue: string
     *
     * * Therefore `toUpperCase()` is allowed.
     */

    newValue.toUpperCase()
}