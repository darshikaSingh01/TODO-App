import { AiFillDelete } from "react-icons/ai";
function TodoItem1({ todoName, todoDate, todoPriority, onDeleteClick }) {
  let getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "red";
      case "Medium":
        return "orange";
      case "Low":
        return "green";
      default:
        return "gray";
    }
  };
  return (
    <div class="container">
      <div class="row todo-row">
        <div class="col-6 ">{todoName}</div>
        <div class="col-2 ">{todoDate}</div>
        <div
          class="col-2 "
          style={{
            backgroundColor: getPriorityColor(todoPriority),
            textAlign: "center",
            padding: "5px",
            marginBottom: "5px",
            borderRadius: "5px",
          }}
        >
          {todoPriority}
        </div>
        <div class="col-2 delete-btn" style={{ textAlign: "center" }}>
          <button
            type="button"
            class="btn btn-danger todo-button"
            onClick={() => onDeleteClick(todoName)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
