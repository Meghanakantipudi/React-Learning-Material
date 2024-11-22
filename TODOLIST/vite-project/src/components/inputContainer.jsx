
function InputContainer({toDoItem, updateToDoItem, addToDoItem}){
    return (
        <div className="TodoContainer">
            <input placeholder="Enter todo" onChange={updateToDoItem} value={toDoItem}></input>
            <button id="add" onClick={addToDoItem}>+</button>
          </div>
    )
}

export default InputContainer;