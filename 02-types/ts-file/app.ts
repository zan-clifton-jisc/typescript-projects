// 1: Add an interface that defines the objects inside of the todoItems array
// 2: Use an enum to strongly type some hard coded values for the status of a newTodo in addTodoItem
// 3: Apply types to the parameters and return values of addTodoItem and getNextId

interface Todo {
    id: number;
    title: string;
    status: Status;
    completedOn?: Date
}

enum Status {
    todo = "todo",
    inProgress = "in-progress",
    done = "done"
}

const todoItems: Todo[] = [
    { id: 1, title: "Learn HTML", status: Status.done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: Status.inProgress },
    { id: 3, title: "Write the best app in the world", status: Status.todo },
]

function addTodoItem(todo: string): Todo {
    const id = getNextId(todoItems)

    const newTodo = {
        id: id,
        title: todo,
        status: Status.todo,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId(items: Todo[]): number {
    return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))