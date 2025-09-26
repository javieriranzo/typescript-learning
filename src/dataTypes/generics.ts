class Draft<T> {
    private ticket: T;
    private participantName: string;

    constructor(participantName: string) {}

    setTicket(ticket: T) {
        this.ticket = ticket;
    }

    getTicket(): T {
        return this.ticket;
    }

    public draftTicket(): string {
        return `The ticket ${this.ticket} has been drafted by ${this.participantName}`;
    }

}

let draft1 = new Draft<number>('Alice');
draft1.setTicket(123);
console.log(draft1.draftTicket());

let draft2 = new Draft<string>('Bob');
draft2.setTicket('A-456');
console.log(draft2.draftTicket());
