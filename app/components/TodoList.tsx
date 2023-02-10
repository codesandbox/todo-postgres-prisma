import { Todo } from "@prisma/client";
import { TodoItem } from "./TodoItem";
import { AddTodo } from "./AddTodo";

export const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <div className="max-w-2xl w-full">
      <h1 className="text-center text-xl mb-8 font-semibold text-gray-600">
        Postgres + Prisma Todo List
      </h1>

      <div className="mb-8 space-y-2">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>

      <AddTodo />
    </div>
  );
};
