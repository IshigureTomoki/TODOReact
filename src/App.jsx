import { React, useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["aa", "ii"]);
  const [completeTodos, setCompleteTodos] = useState(["uu", "ee"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを追加" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
