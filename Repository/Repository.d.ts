type TodoRepository = {
  selectTodo: (id: Todo["id"]) => Promise<Todo>;
  insertTodo: (todo: Omit<Todo, "id">) => Promise<Todo>;
  updateTodo: (id: Todo["id"], todo: Omit<Todo, "id">) => Promise<Todo>;
  deleteTodo: (id: Todo["id"]) => Promise<Todo["id"]>;
};
