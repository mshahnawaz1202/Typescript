import { useState } from "react"


interface OrderFormProps{
    onSubmit(order: {name:string, cups: number}): void
}

function OrderForm({onSubmit}: OrderFormProps) {

    const [name, setname] = useState<string>("Mango Juice");
    const [cups, setCups] = useState<number>(1)
    function handleSubmit(e:React.SubmitEvent<HTMLFormElement>){
        e.preventDefault();
        onSubmit({name,cups})

    }
  return (
    <form onSubmit={handleSubmit}>
        <br/>
        <label>Juice Name : </label>
        <input
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>)=>
            setname(e.target.value)
        }
        />
        <br/><br/>
        <label>Cups : </label>
        <input
        type="number"
        value={cups}
        onChange={(e: React.ChangeEvent<HTMLInputElement>)=>
            setCups(Number(e.target.value)|| 0)
        }
        />
        <br/>
        <button type="submit">Submit</button>
    </form>
  )
}

export default OrderForm