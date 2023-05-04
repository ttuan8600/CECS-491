import './App.css';
import Form from './form'
import axios from 'axios'

const getDataAxios = async () => {
    const response =
      await axios.get("http://localhost:3001/api");
    console.log(response.data);
}

const delDataAxios = async () => {
  const response =
    await axios.delete("http://localhost:3001/api");
  console.log(response.data);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Form></Form>
      <button onClick= {getDataAxios}> Get Back All Data </button>
      <button onClick= {delDataAxios}> Delete All Data </button>
      </header>
    </div>
  );
}

export default App;
