import { useState } from "react";
import ToDoListItem from "./toDoListItem.jsx";

function ToDoListContainer({ toDoItems, setToDoItems }) {
  const [deletedItemIndex, setDeletedItemIndex] = useState(-1);
  const [checkedItem, setCheckedItem] = useState(false);

  function updateDeletedItemIndex(e, index) {
    console.log(e);
    console.log(index);
    if (e.target.checked) {
      setDeletedItemIndex(index);
      setCheckedItem(false);
    }
  }

  function deleteToDoItem(index) {
    console.log(index);
    setToDoItems(toDoItems.filter((item, idx) => idx !== index));
  }

  return (
    <div className="ToDoList">
      {toDoItems.map((item, index) => (
        <ToDoListItem
          item={item}
          index={index}
          key={index}
          checkedItem={checkedItem}
          deleteToDoItem={deleteToDoItem}
        />
      ))}
    </div>
  );
}

export default ToDoListContainer;
