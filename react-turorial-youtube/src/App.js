import { useState } from "react";
import TodoList from "./TodoList";

function App() {
    const [todos, setTodos] = useState([
      { id: 1, name: "Todo1", completed: false},
    ]);

  return (
   <>
    <TodoList todos={todos} />
    <input type="text" />
    <button>タスクの追加</button>
    <button>完了したタスクの削除</button>
    <div>残りのタスク:0</div>
  </>
  );
};

export default App;
