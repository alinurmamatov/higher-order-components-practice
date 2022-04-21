import { useState } from "react";


const withCounter = (Component) => {
    return function CounterStateAll() {
        const [counter, setCounter] = useState(0);
        const [multi, setMulti] = useState(null);

        const multiply = (pr) => {
            setMulti(pr * 100);
        }

        return (
            <Component counter={counter} setCounter={setCounter} multiply={multiply}/>
        )
    }
}
export default withCounter;