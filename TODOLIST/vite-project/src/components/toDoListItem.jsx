function ToDoListItem({ item, index, deleteToDoItem }) {
  return (
    <div id={index} className="ToDoListItem">
      <label>{item}</label>
      <div className="actions">
        <input
          type="checkbox"
        ></input>
        <button id="delete" onClick={() => deleteToDoItem(index)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoListItem;
