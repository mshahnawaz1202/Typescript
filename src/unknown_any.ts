/**

* ? Any vs Unknown
*
* ? Any
*
* * `any` disables TypeScript's type checking.
* * It can hold any type of value.
* * You can access properties and call methods without type checks.
* * It can be assigned to other types.
*
* Example:
*
* let value: any = "Hello";
* value.toUpperCase();
* value.someMethod(); // No TypeScript error
*
*
* ? Unknown
*
* * `unknown` can hold any type of value.
* * Unlike `any`, you cannot use the value directly.
* * You must narrow or check its type before using it.
* * It cannot be assigned to a specific type without narrowing.
*
* Example:
*
* let value: unknown = "Hello";
*
* // value.toUpperCase(); // Error
*
* if (typeof value === "string") {
* value.toUpperCase(); // Allowed
* }
*
*
* ? Main Difference
*
* `any`     -> "I don't care about the type."
* `unknown` -> "I don't know the type, so check it first."
*
*
* ? Rule
*
* Prefer `unknown` when the type is not known.
* Use `any` only when you intentionally want to disable type checking.
  */



