"use client";

import { Todo } from "@prisma/client";
import { FaTrash } from "react-icons/fa";
import { deleteTodo, setChecked } from "../actions";

export const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <div
      key={todo.id}
      className="bg-gray-100 text-gray-800 p-4 rounded shadow-md flex items-center justify-between"
    >
      <div
        className={`flex items-center text-base ${
          todo.checked ? "line-through text-gray-400" : "text-gray-700"
        }`}
      >
        <input
          onClick={() => {
            setChecked(todo.id, !todo.checked);
          }}
          type="checkbox"
          className="mr-4"
          checked={todo.checked ? true : false}
        />
        {todo.content}
      </div>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-gray-400 hover:text-gray-500 border-none"
      >
        <FaTrash />
      </button>
    </div>
  );
};
