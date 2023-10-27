import { useState } from "react";

export default function MyApp() {
    const [count, setCount] = useState(0)

    const handlechange = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>
                Counters that update separately
            </h1>
            <MyButton counter = {count} handleClick = {handlechange} />
            <br/>
            <MyButton counter = {count} handleClick = {handlechange}/>
        </div>
    );
}




function MyButton({counter, handleClick}) {
   

    return (
        <button onClick={handleClick}>
            click me ({counter})
        </button>
    )
}