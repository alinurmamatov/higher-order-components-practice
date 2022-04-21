import withCounter from "./withCounter"

function Hover({counter, setCounter, multiply, multi}) {
    //const [counter, setCounter] = useState(0);
  return (
      <>
      <div>Hover Function {counter} or {multi}</div>
      <button onMouseEnter={() => setCounter(prev => prev + 2)} onClick={() => multiply(counter)}>Hover me</button>
      </>
  )
}

export default withCounter(Hover);