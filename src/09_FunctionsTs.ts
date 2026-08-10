/**
 * ============================================================================
 * ? Function Parameters and Return Types
 * ============================================================================
 *
 * * Parameters can have explicit types.
 *
 * * Here:
 *
 * * type: string
 * * glasses: number
 */

function makeJuice(type: string, glasses: number) {
    console.log(`Making ${glasses} glasses of ${type}`)
}


makeJuice("mango", 2)


/**
 * ============================================================================
 * ? Return Type
 * ============================================================================
 *
 * * `: number` specifies that the function must return a number.
 */

function getJuicePrice(): number {
    return 150
}


/**
 * ============================================================================
 * ? Logging Functions
 * ============================================================================
 *
 * * `void` means the function does not return a value.
 *
 * * The function can perform an action such as logging,
 * * but it does not return a result.
 */

function logJuice(): void {
    console.log("Juice")
}


/**
 * ============================================================================
 * ? Optional Parameters
 * ============================================================================
 *
 * * `?` makes a parameter optional.
 *
 * * The function can be called with or without the parameter.
 */

function orderJuice(type?: string) {
    console.log(type)
}


orderJuice()
orderJuice("mango")


/**
 * ============================================================================
 * ? Default Parameters
 * ============================================================================
 *
 * * A default parameter provides a value when no argument
 * * is passed.
 *
 * * The parameter is automatically optional when a default
 * * value is provided.
 */

function orderJuiceWithDefault(type: string = "shahnawaz") {
    console.log(type)
}


orderJuiceWithDefault()
orderJuiceWithDefault("mango")