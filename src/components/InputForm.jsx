import withCounter from "./withCounter";

function InputForm({counter, setCounter}) {
    //const [counter, setCounter] = useState(0);
  return (
    <div>Input length {counter}: 
        <input type="text" onChange={(e) => setCounter(e.target.value.length)}/>
    </div>
  )
}

export default withCounter(InputForm);