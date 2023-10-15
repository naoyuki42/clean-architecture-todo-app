import { assertEquals } from "https://deno.land/std@0.204.0/assert/mod.ts";
import {
  CreateTodoTransaction,
  DeleteTodoTransaction,
  GetTodoTransaction,
  UpdateTodoContentTransaction,
} from "../UseCase/TodoTransaction.ts";
import { MockClientContext } from "../DB/MockClientContext.ts";

Deno.test("Todo Test", async (t: Deno.TestContext) => {
  await t.step("Create Todo Test", async () => {
    const db = new MockClientContext();
    const data = { content: "掃除", isCompleted: true };
    const todo: Todo = await CreateTodoTransaction(data, db);
    assertEquals(todo.content, "掃除");
    assertEquals(todo.isCompleted, true);
  });

  await t.step("Get Todo Test", async () => {
    const db = new MockClientContext();
    const data = { content: "掃除", isCompleted: true };
    await CreateTodoTransaction(data, db);

    const todo: Todo = await GetTodoTransaction(0, db);
    assertEquals(todo.id, 0);
    assertEquals(todo.content, "掃除");
    assertEquals(todo.isCompleted, true);
  });

  await t.step("Update Todo Test", async () => {
    const db = new MockClientContext();
    const data = { content: "掃除", isCompleted: true };
    await CreateTodoTransaction(data, db);

    const todo: Todo = await UpdateTodoContentTransaction(
      0,
      { content: "洗濯", isCompleted: false },
      db
    );
    assertEquals(todo.id, 0);
    assertEquals(todo.content, "洗濯");
    assertEquals(todo.isCompleted, false);
  });

  await t.step("Delete Todo Test", async () => {
    const db = new MockClientContext();
    const data = { content: "掃除", isCompleted: true };
    await CreateTodoTransaction(data, db);

    const result = await DeleteTodoTransaction(0, db);
    assertEquals(result, 0);
  });
});
