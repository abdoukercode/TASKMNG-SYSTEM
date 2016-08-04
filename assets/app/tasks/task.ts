export class Task {
    content: string;
    username: string;
    taskId: string;
    userId: string;

    constructor (content: string, taskId?: string, username?: string, userId?: string) {
        this.content = content;
        this.taskId = taskId;
        this.username = username;
        this.userId = userId;
    }
}
