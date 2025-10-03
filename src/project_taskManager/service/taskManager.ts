class TaskManager {
    
    private tasks: Task[] = [];
         
    shopFishTask: Task = new Task(0, 'Shop fish', 'Call fisherman', 'pending', new Date(), new Date());
    cleanHouseTask: Task = new Task(1, 'Clean house', 'Vacuum and dust', 'in-progress', new Date(), new Date());
    writeReportTask: Task = new Task(2, 'Write report', 'Prepare quarterly report', 'completed', new Date(), new Date());
    attendMeetingTask: Task = new Task(3, 'Attend meeting', 'Team sync-up', 'pending', new Date(), new Date());
    exerciseTask: Task = new Task(4, 'Exercise', 'Go for a run', 'in-progress', new Date(), new Date());

    addTask(task: Task): string {        
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].getId() === task.getId()) {
                throw new Error(`Task with ID ${task.getId()} already exists.`);
            }
        }
        this.tasks.push(task);
        return `Task with ID ${task.getId()} - TITLED ${task.getTitle} added successfully.`;
    }

    listTasks(): void {
        for (let i = 0; i < this.tasks.length; i++) {
            console.log(this.tasks[i].toString());
        }
    }

    getTaskById(id: number | string): Task | null {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].getId() === id) {
                return this.tasks[i];
            }
        }
        return null; 
    }

    deleteTaskById(id: number | string): string {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].getId() === id) {
                this.tasks.splice(i, 1);
                return `Task with ID ${id} deleted successfully.`;
            }
        }
        return `Task with ID ${id} not found.`;     
    }

    
}