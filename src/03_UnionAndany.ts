let subs: number | string = 10

let apiRequest: "success" | "pending" | "error" = "pending"
apiRequest = "success"

/**
 * * we use unions when we don't know that what would be result, either it is a number or string or boolean then we use this
 * * let subs : number | string = 10  => now here we can assign both number and string values
 *  ? production-level used:
 * * let apiRequest : "success" | "pending" | "error" = "pending" => here we are telling that this variable can take only these three values
 * * apiRequest = "success" => will be correct 
 * ! apiRequest = "done" => then it will gives error bcz it is not from pre-defined values
 */


let orders = [12, 23, 45, 56, 46];

/**
 * ? CURRENT ORDER
 *
 * - `let currentOrder`
 *   => Here TypeScript can give it the `any` type,
 *      which means we can assign any datatype value.
 *
 * ! This can be a problem because we lose type safety.
 *
 *
 * * Instead, we can tell TypeScript exactly what type
 *   this variable can have.
 *
 * `number | undefined`
 *
 * * We used `number | undefined` because we don't know
 *   whether `currentOrder` will get a number or stay unassigned.
 *
 * ! If we only use `number`:
 *
 *   let currentOrder: number
 *
 *   then TypeScript can give an error because we don't know
 *   whether it will actually get a number or stay unassigned.
 *
 * * So we use `number | undefined`.
 */


let currentOrder: number | undefined;


for (let order of orders) {
    if (order === 45) {
        currentOrder = order;
        break;
    }
}

console.log(currentOrder);

/**
 * ? FINAL RESULT
 *
 * - If `45` is found:
 *   => `currentOrder` will contain `45`.
 *
 * - If `45` is not found:
 *   => `currentOrder` will stay `undefined`.
 *
 * * That's why the type of `currentOrder` is:
 *
 *   number | undefined
 */

