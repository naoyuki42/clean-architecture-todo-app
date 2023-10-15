export class MockClientContext implements TodoRepository {
  private Todo: Todo[] = [];

  public selectTodo = async (id: Todo["id"]): Promise<Todo> => {
    const data = this.Todo.find((i) => i.id === id);
    if (data === undefined) throw new Error("Todo is not exist");
    return await data;
  };

  public insertTodo = async (todo: Omit<Todo, "id">): Promise<Todo> => {
    const addTodo: Todo = { id: this.Todo.length, ...todo };
    this.Todo = [...this.Todo, addTodo];
    return await this.Todo[this.Todo.length - 1];
  };

  public updateTodo = async (
    id: Todo["id"],
    todo: Omit<Todo, "id">
  ): Promise<Todo> => {
    if (this.Todo[id] === undefined) throw new Error("Todo is not exist");
    this.Todo[id] = { id: id, ...todo };
    return await this.Todo[id];
  };

  public deleteTodo = async (id: Todo["id"]): Promise<Todo["id"]> => {
    if (this.Todo[id] === undefined) throw new Error("Todo is not exist");
    this.Todo.splice(id, 1);
    return await id;
  };
}
