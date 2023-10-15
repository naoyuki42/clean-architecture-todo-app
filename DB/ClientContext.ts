import { Client } from "https://deno.land/x/mysql/mod.ts";

export class ClientContext implements TodoRepository {
  private client;

  public constructor() {
    this.client = new Client().connect({
      hostname: "127.0.0.1",
      username: "root",
      db: "dbname",
      password: "password",
    });
  }

  public async selectTodo(id: Todo["id"]): Promise<Todo> {
    const { rows: todo } = await this.client.query(
      `select * from todo where id = ${id}`
    );
    return todo;
  }

  public async insertTodo({
    content,
    isCompleted,
  }: Omit<Todo, "id">): Promise<Todo> {
    const { lastInsertedId } = await this.client.execute(
      `INSERT INTO todo values(${content}, ${isCompleted})`
    );
    return { id: lastInsertedId, content: content, isCompleted: isCompleted };
  }

  public async updateTodo(
    id: Todo["id"],
    { content, isCompleted }: Omit<Todo, "id">
  ): Promise<Todo> {
    await this.client.execute(
      `update todo set content = ${content}, isCompleted = ${isCompleted} where id = ${id}`
    );
    return { id: id, content: content, isCompleted: isCompleted };
  }

  public async deleteTodo(id: Todo["id"]): Promise<Todo["id"]> {
    await this.client.execute(`delete from todo where id = ${id}`);
    return id;
  }
}
