/**
 * ============================================================================
 * ? Type Alias
 * ============================================================================
 *
 * * A type alias gives a name to a custom type.
 *
 * * It can describe the structure of an object and define
 * * what properties and types it must contain.
 */

type DrinkOrder = {
    type: string
    sugar: number
    cold: boolean
}


function makeDrink(order: DrinkOrder) {
    console.log(order)
}


function serveDrink(order: DrinkOrder) {
    console.log(order)
}


/**
 * ============================================================================
 * ? implements
 * ============================================================================
 *
 * * A class can implement an object-shaped type.
 *
 * * The class must provide all required properties defined
 * * by the type.
 */

type DrinkRecipe = {
    water: number
    milk: number
}


class MangoDrink implements DrinkRecipe {

    water = 100
    milk = 50
}


/**
 * ============================================================================
 * ? Interface
 * ============================================================================
 *
 * * An interface describes the structure of an object.
 *
 * * A class can implement an interface and must provide
 * * all required properties defined by it.
 */

interface GlassSize {
    size: "small" | "large"
}


class Shake implements GlassSize {

    size: "small" | "large" = "large"
}


/**
 * ! A class cannot implement a union of primitive values.
 *
 * * For example:
 *
 * * type GlassSize = "small" | "large"
 *
 * * This cannot be used with:
 *
 * * class Shake implements GlassSize
 *
 * * because `"small" | "large"` represents values,
 * * not an object structure.
 */


/**
 * ============================================================================
 * ? Union Types
 * ============================================================================
 *
 * * A union type (`|`) means a value can be one of
 * * several possible types.
 *
 * * Here `ShakeType` can only be:
 *
 * * - "mango"
 * * - "banana"
 * * - "apple"
 */

type ShakeType = "mango" | "banana" | "apple"


function orderShake(type: ShakeType) {
    console.log(type)
}


/**
 * ============================================================================
 * ? Intersection Types
 * ============================================================================
 *
 * * An intersection type (`&`) combines multiple types.
 *
 * * `AppleShake` must contain all properties from:
 *
 * * - BaseShake
 * * - Extra
 */

type BaseShake = {
    fruits: number
}


type Extra = {
    almond: number
}


type AppleShake = BaseShake & Extra


const glass: AppleShake = {
    fruits: 2,
    almond: 3
}


/**
 * ============================================================================
 * ? Optional Properties
 * ============================================================================
 *
 * * `?` makes a property optional.
 *
 * * `bio?: string` means the `bio` property can either:
 *
 * * - contain a string
 * * - be omitted
 */

type User = {
    username: string
    bio?: string
}


const user1: User = {
    username: "shahnawaz"
}


const user2: User = {
    username: "shahnawaz",
    bio: "my bio"
}


/**
 * ============================================================================
 * ? Readonly Properties
 * ============================================================================
 *
 * * `readonly` prevents a property from being reassigned
 * * after the object has been created.
 */

type Config = {
    readonly appName: string
    version: number
}


const cfg: Config = {
    appName: "Notes App",
    version: 3
}


/**
 * ! This produces an error:
 *
 * * cfg.appName = "Notes App Updated"
 *
 * * Cannot assign to 'appName' because it is a
 * * read-only property.
 *
 * * `version` can still be changed because it is not readonly.
 */