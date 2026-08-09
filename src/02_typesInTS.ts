/**
 * ! error
 * * some description
 * ? headings
 */

let drink = "Coffe"

let cups = Math.random() > 0.5 ? 10 : 5 
let plates = Math.random() > 0.5 ? 10 : '5'

let flavor:string = "Mango"


/**
 * ! typescript gives error when we assign drink = 0
 * ? Type Inferencing (type assigns automatically)
 * * let cups = Math.random() > 0.5 ? 10 : 5  => it will automatically ready for numbers
 * * let plates = Math.random() > 0.5 ? 10 : '5' =>(let plates: string | number) it will automatically ready for both number and string datatypes
 * ? Type annotation (we annotate type by our own)
 * * let flavor:string = "Mango"
 * * annotations => number, string, boolean, 
 */


