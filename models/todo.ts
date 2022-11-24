export interface Todo {
  id: number;
  name: string;
  status: Status;
}

export enum Status {
  Backlog,
  Active,
  Done,
}

export enum TodosStatus {
  BacklogTodos = "BacklogTodos",
  ActiveTodos = "ActiveTodos",
  CompletedTodos = "CompletedTodos",
}
