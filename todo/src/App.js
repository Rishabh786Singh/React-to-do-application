import './App.css';
import { useState, useEffect} from 'react';
import { Button , FormControl, Input, InputLabel} from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos , setTodos] = useState([]);
  const [response, setResponse] = useState('');
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot=>{
      console.log(snapshot.docs.map(doc=>doc.data().todo));
      setTodos(snapshot.docs.map(doc=> doc.data().todo));
    })
  }, [])
  const addResponse = (event) =>{
    event.preventDefault();
    db.collection('todos').add({
      todo: response,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
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
        {todos.map((element, Index )=>{
          return <Todo count={Index} todo ={element}/>
        })}
      </ul>
    </div>
  );
}

export default App;
