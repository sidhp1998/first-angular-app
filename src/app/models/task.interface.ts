export interface TaskInterface{
    id: number;
    userId: number;
    title: string;
    completed: boolean;
    createdAt: Date;
    completedAt: Date|null|undefined;
    dueDate:Date|null|undefined;
    summary: string;
}