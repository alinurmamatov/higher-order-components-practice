import Counter from './components/Counter';
import './App.css';
import Hover from './components/Hover';
import InputForm from './components/InputForm';
import Form from './components/Form';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Hover/>
      <InputForm/>
      <Form />
      <Contacts/>
    </div>
  );
}

export default App;
