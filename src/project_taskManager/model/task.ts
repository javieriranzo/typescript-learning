class Task {
    private id: number | string; 
    private title: string; 
    private description: string; 
    private status: 'pending' | 'in-progress' | 'completed'; 
    private createdAt: Date; 
    private updatedAt: Date;

    constructor(id: number | string, title: string, description: string, status: 'pending' | 'in-progress' | 'completed' = 'pending',
        createdAt: Date = new Date(),updatedAt: Date = new Date()) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    getId(): number | string {
        return this.id; 
    }

    getTitle(): string {
        return this.title; 
    }

    getDescription(): string {
        return this.description; 
    }

    getStatus(): 'pending' | 'in-progress' | 'completed' {
        return this.status; 
    }

    getCreatedAt(): Date {
        return this.createdAt; 
    }

    getUpdatedAt(): Date {
        return this.updatedAt; 
    }

    setTitle(title: string): void {
        this.title = title; 
        this.updatedAt = new Date(); 
    }

    setDescription(description: string): void {
        this.description = description; 
        this.updatedAt = new Date(); 
    }

    setStatus(status: 'pending' | 'in-progress' | 'completed'): void {
        this.status = status; 
        this.updatedAt = new Date(); 
    }

    toString(): string {
        return `Task [ID: ${this.id}, Title: ${this.title}, Description: ${this.description}, Status: ${this.status}, Created At: ${this.createdAt.toISOString()}, Updated At: ${this.updatedAt.toISOString()}]`;
    }
    
}