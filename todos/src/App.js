import React from "react";
import TodoList from "./components/TodoList";


import { CssBaseline, Container } from "@material-ui/core";

function App() {
  return (
    <Container>
      <CssBaseline>
        <div className="App">
          <TodoList />
        </div>
      </CssBaseline>
    </Container>
  );
}

export default App;
