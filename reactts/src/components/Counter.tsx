import { useState } from "react"

export function Counter(){
    const [count, setcount] = useState(0)
    return(
        <div>
            <p>Cups Ordered : {count} </p>
            <button
            onClick={() => setcount((c) => c+1)}
            >Order</button>
        </div>
    )
}