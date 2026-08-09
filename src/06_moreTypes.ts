/**
 * ?forcefull type assertion
 */

let response: any = '42';

let length: number = (response as string).length  //* => forcefull type assertion

type Book = {
    name: string
}

let bookString = '{ "name":"Calculus" } '

let bookObject = JSON.parse(bookString) as Book //* => forcefull type assertion

console.log(bookObject);


const InputElements = document.getElementById("username") as HTMLInputElement

/**------------------------------------------------------------------------------------------- */

try{

}catch(error){
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log('Error',error);
}


const data: unknown = 'Shahnawaz'
const strData: string = data as string


