import './App.css';
import axios from 'axios';

axios.get('http://localhost:3001/notes').then(response =>{
  const notes = response.data
  console.log(notes)
})

function App() {
  return <div className="App"></div>;
}

export default App;
