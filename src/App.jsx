import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import TodoTitle from "./Components/TodoTitle";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  // load todo items from local storage
  useEffect(() => {
    const storedTodoItems = localStorage.getItem("todoItems");
    if (storedTodoItems) {
      setTodoItems(JSON.parse(storedTodoItems));
    }
  }, []);

  //save todo items to local storage
  const saveTodoItemsToLocalStorage = (items) => {
    localStorage.setItem("todoItems", JSON.stringify(items));
  };

  const handleNewItem = (itemName, itemDueDate, itemPriority) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate, priority: itemPriority },
    ];
    setTodoItems(newTodoItems);
    saveTodoItemsToLocalStorage(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    saveTodoItemsToLocalStorage(newTodoItems);
  };

  return (
    <div>
      <AppName></AppName>
      <center className="todo-container">
        <TodoTitle></TodoTitle>
        <AddTodo onNewItem={handleNewItem}></AddTodo>
        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>
      </center>
    </div>
  );
}

export default App;
