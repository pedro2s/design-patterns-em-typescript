export interface Memento {
    getState(): string;
    getName(): string;
    getDate(): string;
}

export class SomeMemento implements Memento {
    private state: string;
    private date: string;

    constructor(state: string) {
        this.state = state;
        this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }

    getState(): string {
        return this.state;
    }

    getName(): string {
        return `${this.date} / (${this.state.substring(0, 9)}...)`
    }

    getDate(): string {
        return this.date;
    }
}

export class Originator {
    private state: string;

    constructor(state: string) {
        this.state = state;
        console.log(`Originator: Meu estado inicial é: ${state}`)
    }

    action(): void {
        console.log('Originator: executando uma ação');
        this.state = this.getRandomString(30);
        console.log(`Originator: e meu estado mudou para: ${this.state}`)
    }

    private getRandomString(length: number = 30): string {
        const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        return Array
            .apply(null, {length: length} as any)
            .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
            .join('');
    }

    save(): Memento {
        return new SomeMemento(this.state);
    }

    restore(memento: Memento): void {
        this.state = memento.getState();
        console.log(`Originator: Meu estado mudou para ${this.state}`)
    }
}

export class Caretaker {
    private mementos: Memento[] = [];
    private originator: Originator;

    constructor(originator: Originator) {
        this.originator = originator;
    }

    backup(): void {
        console.log('\nCaretaker: Salvando estado do Originator');
        this.mementos.push(this.originator.save());
    }

    undo(): void {
        if(!this.mementos.length) {
            return;
        }
        const memento = this.mementos.pop();

        console.log(`Caretaker: Restaurando estado para: ${memento?.getName()}`);
        if (memento) this.originator.restore(memento);
    }

    showHistory(): void {
        console.log('Caretaker: Aqui está a lista de mementos:');
        for (const memento of this.mementos) {
            console.log(memento.getName());
        }
    }
}

const originator = new Originator('Design patterns com typescript');
const caretaker = new Caretaker(originator);

caretaker.backup();
originator.action();

caretaker.backup();
originator.action();

caretaker.backup();
originator.action();


console.log('');
caretaker.showHistory();

caretaker.undo();

caretaker.undo();
console.log('')
caretaker.showHistory();
