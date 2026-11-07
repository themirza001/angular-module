export interface Task {
    id: string,
    userId: string,
    summary: string,
    title: string,
    dueDate: string
}

export interface NewTask {
    summary: string,
    title: string,
    dueDate: string
}