import { useState } from "react";
import "./App.css";
import InputContainer from "./components/inputContainer";
import ToDoListContainer from "./components/toDoListContainer";

function App() {
  const [toDoItem, setToDoItem] = useState("");
  const [toDoItems, setToDoItems] = useState([]);

  function updateToDoItem(e) {
    setToDoItem(e.target.value);
  }

  function addToDoItem() {
    if (toDoItem) {
      setToDoItems([...toDoItems, toDoItem]);
      setToDoItem("");
      console.log(toDoItems);
    }
  }

  return (
    <>
      <div className="MainContainer">
        <h1>Todo List React</h1>
        <InputContainer
          toDoItem={toDoItem}
          updateToDoItem={updateToDoItem}
          addToDoItem={addToDoItem}
        />
        <ToDoListContainer
          toDoItems={toDoItems || []}
          setToDoItems={setToDoItems}
        />
      </div>
    </>
  );
}

export default App;
