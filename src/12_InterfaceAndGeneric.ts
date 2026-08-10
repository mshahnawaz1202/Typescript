/**
 * ============================================================================
 * ? Interfaces
 * ============================================================================
 *
 * * An interface defines the structure of an object.
 *
 * * It describes what properties and methods an object should have.
 */

interface Shake {
    flavor: string
    price: number
    milk?: boolean
}


const mango: Shake = {
    flavor: "mango",
    price: 150
}


/**
 * ============================================================================
 * ? readonly in Interface
 * ============================================================================
 *
 * * `readonly` prevents a property from being changed
 * * after the object is created.
 *
 * * `?` makes a property optional.
 */

interface Shop {
    readonly id: number
    name: string
    location?: string
}


const newShop: Shop = {
    id: 27,
    name: "ShakeParty"
}


/**
 * ! newShop.id = 30
 * ! Cannot assign to a readonly property.
 */


/**
 * ============================================================================
 * ? Function Interface
 * ============================================================================
 *
 * * An interface can describe the structure of a function.
 *
 * * `(price: number): number`
 * * means:
 *
 * * - accepts a number
 * * - returns a number
 */

interface Discount {
    (price: number): number
}


const applyDiscount: Discount = (price) => price * 0.5


/**
 * ============================================================================
 * ? Method Interface
 * ============================================================================
 *
 * * An interface can define methods that an object must provide.
 */

interface Machine {
    start(): void
    stop(): void
}


const shakeMachine: Machine = {

    start() {
        console.log("start")
    },

    stop() {
        console.log("stop")
    }
}


/**
 * ============================================================================
 * ? Index Signature
 * ============================================================================
 *
 * * An index signature allows an object to have
 * * dynamic property names.
 *
 * * Here:
 *
 * * - property name → string
 * * - property value → number
 */

interface ShakeRating {
    [flavor: string]: number
}


const mangoShakeRating: ShakeRating = {
    mango: 4.8,
    banana: 4.2,
    apple: 4.5
}


/**
 * ============================================================================
 * ? Interface Merging
 * ============================================================================
 *
 * * TypeScript allows interfaces with the same name
 * * to be automatically merged.
 *
 * * The final interface contains all properties
 * * from both declarations.
 */

interface User {
    name: string
}


interface User {
    age: number
}


const user1: User = {
    name: "ShahNawaz",
    age: 20
}


/**
 * ============================================================================
 * ? Interface Extending Multiple Interfaces
 * ============================================================================
 *
 * * An interface can extend multiple interfaces.
 *
 * * `C` receives all properties from:
 *
 * * - A
 * * - B
 */

interface A {
    a: string
}


interface B {
    b: string
}


interface C extends A, B {
}


const combined: C = {
    a: "Hello",
    b: "World"
}