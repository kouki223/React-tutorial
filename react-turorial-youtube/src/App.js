import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
    const [todos, setTodos] = useState([]);

    const todoNameRef= useRef();

    const hondleAddTodo = () => {
      const name = todoNameRef.current.value;
      setTodos((prevTodos) => {
        return [...prevTodos, { id: uuidv4(), name: name, completed: false}];
      });
      todoNameRef.current.value = "";
    }

    const toggleTodo = (id) => {
      const newTodos = [...todos];
      const todo = newTodos.find((todo) => todo.id === id);
      //findメソッドは条件に合う最初の要素を返す
      //条件に合う要素がない場合はundefinedを返す
      //条件に合う要素が複数ある場合は最初に見つかった要素を返す
      //条件に合う要素が見つかった時点で探索を終了する
      //idは引数に渡されたid
      todo.completed = !todo.completed;
      //反転されたデータで更新する
      setTodos(newTodos);
    };

    const handleClear = () => {
      const newTodos = todos.filter((todo) => !todo.completed);
      //filterメソッドは条件に合う要素を抽出して新しい配列を作成する
      //条件に合う要素がない場合は空の配列を返す
      setTodos(newTodos);
    };

  return (
   <>
    <TodoList todos={todos} />
    <input type="text" ref={todoNameRef} />
    <button onClick={hondleAddTodo}>タスクの追加</button>
    <button onClick={handleClear}>完了したタスクの削除</button>
    <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
  </>
  );
};

export default App;
