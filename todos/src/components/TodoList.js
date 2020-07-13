import React, { useState, useReducer } from "react";
import { todoReducer, initialState } from "../reducers";
import Todo from "./Todo";
import { Button, TextField, styled } from "@material-ui/core";

const TodoButton = styled(Button)({
  margin: "1% 0"
})

const TodoList = () => {
  const [todoState, dispatch] = useReducer(todoReducer, initialState);

  const [newTodo, setNewTodo] = useState("");
  

  const handleChanges = (e) => {
    setNewTodo(e.target.value);
  };

  const handleTodoClick = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setNewTodo("");
  };

  const toggleCompletedTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const clearCompletedTodos = (e) => {
    e.preventDefault();
    dispatch({ type: "CLEAR_TODOS" });
  };

  return (
    <div>
      <h2>Get this stuff done:</h2>
      {todoState.todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            toggleCompletedTodo={toggleCompletedTodo}
          />
        );
      })}
      <h2>Add some stuff to get done:</h2>
      <div>
        <div>
          <TextField
            id="standard-error-helper-text"
            label="Add todo"
            type="text"
            name="newTodo"
            value={newTodo}
            onChange={handleChanges}
          />
        </div>
        <div>
          <TodoButton onClick={handleTodoClick} variant="contained" color="primary">
            Add Todo
          </TodoButton>
        </div>
        <div>
          <TodoButton
            onClick={clearCompletedTodos}
            variant="contained"
            color="secondary"
          >
            Clear Completed
          </TodoButton>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
