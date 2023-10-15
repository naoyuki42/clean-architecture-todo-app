type GetTodoTransaction = (
  id: Todo["id"],
  repository: TodoRepository
) => Promise<Todo>;

type CreateTodoTransaction = (
  data: Omit<Todo, "id">,
  repository: TodoRepository
) => Promise<Todo>;

type UpdateTodoTransaction = (
  id: Todo["id"],
  { ...data }: Omit<Todo, "id">,
  repository: TodoRepository
) => Promise<Todo>;

type DeleteTodoTransaction = (
  id: Todo["id"],
  repository: TodoRepository
) => Promise<Todo["id"]>;
