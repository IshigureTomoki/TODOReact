import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを追加" />
        <button>追加でっせ</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>タスク１</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>タスク２</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          <div className="list-row">
            <li>タスク１</li>
            <button>戻す</button>
          </div>
          <div className="list-row">
            <li>タスク２</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};