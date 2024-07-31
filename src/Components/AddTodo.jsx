import { useState } from "react";

function AddTodo({ onNewItem }) {
  let [todoName, setTodoName] = useState("");
  let [dueDate, setDueDate] = useState("");
  let [priority, setPriority] = useState("Medium");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate, priority);
    setDueDate("");
    setTodoName("");
    setPriority("Medium");
  };

  return (
    <div className="container text-center">
      <div className="row todo-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter new task"
            className="input-task border"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-2">
          <input
            type="date"
            className="input-date border"
            value={dueDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <select
            className="form-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success todo-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
