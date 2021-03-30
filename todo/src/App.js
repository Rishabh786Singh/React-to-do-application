import './App.css';
import { useState} from 'react';
import { Button , FormControl, Input, InputLabel} from '@material-ui/core';

function App() {
  const [todos , setTodos] = useState(["Finish this Project", "Start another project"]);
  const [response, setResponse] = useState('');
  const addResponse = (event) =>{
    event.preventDefault();
    setTodos([...todos, response]);
    setResponse('');
  };
  return (
    <div className="App">
      <h1>Hello Development World!</h1>
      <FormControl>
        <InputLabel htmlFor="my-input">Write your todo!</InputLabel>
        <Input value={response}  onChange={event => setResponse(event.target.value)}/>
      </FormControl>
      <Button  disabled={!response} type="submit" onClick={addResponse} variant="contained" color="primary">Add to-do
        </Button>
      <ul>
        {todos.map(todo =>{
          return <li>{todo}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
