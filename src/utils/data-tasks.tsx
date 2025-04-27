export type Status = 'todo' | 'in-progress' | 'done'
export type Priority = 'low' | 'medium' | 'high'
export type Task = {
    title: string,
    id: string,
    status: Status,
    priority: Priority,
    points?: number
}

export const statuses: Status[] = [ 'todo', 'in-progress', 'done' ]
export const priorities: Priority[] = [ 'low', 'medium', 'high' ]

export const tasks: Array<Task> = [
    {
      title: "Task 1",
      id: "1",
      status: "todo",
      priority: "medium",
      points: 5
    },
    {
      title: "Task 2",
      id: "2",
      priority: "high",
      status: "in-progress",
      points: 3
    },
    {
      title: "Task 3",
      id: "3",
      priority: "low",
      status: "done",
      points: 8
    },
    {
      title: "Task 4",
      id: "4",
      priority: "medium",
      status: "todo",
      points: 2
    },
    {
      title: "Task 5",
      id: "5",
      priority: "high",
      status: "in-progress",
      points: 6
    },
    {
      title: "Task 6",
      id: "6",
      priority: "low",
      status: "done",
      points: 4
    },
    {
      title: "Task 7",
      id: "7",
      priority: "medium",
      status: "todo",
      points: 7
    },
    {
      title: "Task 8",
      id: "8",
      priority: "high",
      status: "in-progress",
      points: 1
    }
]