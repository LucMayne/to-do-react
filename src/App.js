import { useSelector, useDispatch } from "react-redux";
import { addToDo, deleteToDo, editToDo, markComplete } from "./store/toDo";
import { useState } from 'react';
import './App.css';

function App() {

  // get the toDos state
  const toDos = useSelector(state => state.toDoList.data);
  // initialize the dispatch
  const dispatch = useDispatch();

  // create a state for the user input
  const [userInput, setUserInput] = useState('');

  // call addToDo reducer to create a new to-do item
  const addNewToDo = (event) => {
    event.preventDefault();
    // if there is input 
    if (userInput !== "") {
      dispatch(addToDo(userInput));
      setUserInput('');
    }
  };

  // call deleteToDo reducer to delete an item at the id passed in
  const deleteItem = (id) => {
    dispatch(deleteToDo({id}));
  }

  // call editToDo reducer to edit a to-do item
  const editItem = (id) => {
    // if there is input 
    if (userInput !== "") {
      // pass id and userInput as the action
      dispatch(editToDo({id, userInput}));
      setUserInput('');
    }
  }

  // call markComplete reducer which sets completed to true in toDo.js at the given id
  const completed = (id) => {
    dispatch(markComplete({id}));
  }

  return (
    <div className="App">
      <h1>Add to the To-Do list:</h1>
      {/* create an input bar with a button to add the input */}
      <input id="input-field" type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      <button onClick={addNewToDo}>Add To-Do</button>

      {/* loop through each toDos item */}
      {Object.keys(toDos).map((key) => (
        <div className="todo-item" key={key}>
          {/* use the key as the id for each item */}
          <p>{toDos[key].content}</p>

          {/* buttons to delete, edit and mark as completed */}
          <div className="Buttons">
            <button onClick={() => deleteItem(key)}>Delete</button>
            <button onClick={() => editItem(key)}>Edit</button>
            <button onClick={() => completed(key)}>{toDos[key].completed ? 'Completed' : 'Complete'}</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
