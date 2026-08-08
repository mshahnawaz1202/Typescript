function getDrink(kind: number | string) {
  if (typeof kind === 'string') { // * here it will become string
    return `Making ${kind} drink ...`
  }

  return `Drink Order : ${kind}` // * here it will become number
}

/**----------------------------------------------------------------------------------------------- */
function serveDrink(msg?: string) {
  if (msg) {
    return `Serving ${msg}`
  }
  return `Serving default mango drink`
}

/**----------------------------------------------------------------------------------------------- */
/**
 * ?exhausting checks
 */

function orderDrink(size: "medium" | "small" | "larger" | number) {
  if(size === 'small'){
    return `Small Drink Package`
  }
  if(size === 'medium'|| size === 'larger'){
    return `Make extra drinks`
  }

  return `Drink Order ${size}`


}

/**----------------------------------------------------------------------------------------------- */ 

class MangoDrink{
  serve(){
    return 'Serving Mango Shake'
  }
}

class BananaDrink{
  serve(){
    return 'Serving Banana Shake'
  }
}

function serve(drink:MangoDrink| BananaDrink){
  if(drink instanceof MangoDrink){
    return drink.serve()
  }
}

/**----------------------------------------------------------------------------------------------- */
type DrinkOrder ={
  type: string,
  sugar:number
}

function isDrinkOrder(obj:any):obj is DrinkOrder{
  return (
    typeof obj === "object" && obj!== null && typeof obj.type === 'string' && obj.sugar === 'number'
  )
}

function serveOrder(item:DrinkOrder| string){
  if(isDrinkOrder(item)){
    return `Serving ${item.type} drink with ${item.sugar} spoons sugar`
  }
  return `serving custom drink ${item}`
}