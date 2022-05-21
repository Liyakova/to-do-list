
import { ToDoList } from './ToDoList';
import './App.css';
import symbol from './todo.png';
import girl from './girl.jpg'

function App() {
  return (
    <div className='container'>
      <div className='head'>
        <img src={symbol} height='30px' alt='symbol'/>
        <h1>To do list:</h1>
      </div>
      <ToDoList/>
      <img src={girl} width='300px' alt='girl'/>
    </div>
  );
}

export default App;
