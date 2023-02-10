import { prisma } from "./prisma";

import { TodoList } from "./components/TodoList";

export default async function Home() {
  const todos = await prisma.todo.findMany({
    orderBy: [
      {
        checked: "asc",
      },
    ],
  });

  return <TodoList todos={todos} />;
}
