export type Task = {
    title: string,
    id: string,
    points?: number
}

export const tasks: Array<Task> = [
    {
      title: "Task 1",
      id: "1",
      points: 5
    },
    {
      title: "Task 2",
      id: "2",
      points: 3
    },
    {
      title: "Task 3",
      id: "3",
      points: 8
    },
    {
      title: "Task 4",
      id: "4",
      points: 2
    }
  ]