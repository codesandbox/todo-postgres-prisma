"use client";

import { useRef } from "react";
import { insertTodo } from "../actions";

export const AddTodo = () => {
  const formRef = useRef<HTMLFormElement>(null);

  async function addTodo(data: FormData) {
    const todo = data.get("todo");
    if (todo) {
      await insertTodo(todo.toString());
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }

  return (
    <form action={addTodo} ref={formRef} className="flex space-x-3">
      <input
        name="todo"
        type="text"
        className="flex-auto p-2 shadow-sm rounded"
        placeholder="Enter a nice todo item"
      />

      <button
        type="submit"
        className="flex-none shadow-sm transition-colors text-blue-50 bg-blue-400 hover:bg-blue-500 py-2 px-4 rounded"
      >
        Add It!
      </button>
    </form>
  );
};
