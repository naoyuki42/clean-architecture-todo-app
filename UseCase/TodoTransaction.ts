export const GetTodoTransaction: GetTodoTransaction = async (
  id,
  repository
) => {
  return await repository.selectTodo(id);
};

export const CreateTodoTransaction: CreateTodoTransaction = async (
  data,
  repository
) => {
  return await repository.insertTodo(data);
};

export const UpdateTodoContentTransaction: UpdateTodoTransaction = async (
  id,
  data,
  repository
) => {
  return await repository.updateTodo(id, data);
};

export const DeleteTodoTransaction: DeleteTodoTransaction = async (
  id,
  repository
) => {
  return await repository.deleteTodo(id);
};
