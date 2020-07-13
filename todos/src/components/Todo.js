import React, { useState, useEffect } from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core";
moment().format();
const useStyles = makeStyles({
  completed: {
    textDecoration: "line-through",
  },
  hidden: {
    visibility: "hidden",
  },
  overdue: {
    color: "red",
    fontWeight: "bold"
  },
});

const Todo = (props) => {
  const [isOverdue, setIsOverdue] = useState(false);

  useEffect(() => {
    if (props.todo.dueDate < moment().calendar()) {
      setIsOverdue(true);
    }
  });
  const classes = useStyles();
  console.log(props.todo);
  const handleClick = () => {
    props.toggleCompletedTodo(props.todo.id);
  };
  return (
    <div>
      {isOverdue && <div className={classes.overdue}>!!OVERDUE!!</div>}
      <div
        className={props.todo.completed === true ? classes.completed : ""}
        onClick={handleClick}
      >
        {props.todo.item}
        <span> Due: {props.todo.dueDate}</span>
      </div>
      <div className={props.todo.completed === false ? classes.hidden : ""}>
        {`Completed on ${props.todo.dateCompleted} at ${props.todo.timeCompleted}`}
      </div>
    </div>
  );
};

export default Todo;
