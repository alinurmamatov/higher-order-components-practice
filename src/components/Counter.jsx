import withCounter from "./withCounter";

function Counter({counter, setCounter}) {
    //const [counter, setCounter] = useState(0);

    return (
        <>
        <div>Counter {counter}</div>
        <button onClick={() => setCounter(prev => prev + 1)}>Add One</button>
        </>
    )
}
export default withCounter(Counter);