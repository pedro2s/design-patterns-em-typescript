export interface Command {
    execute(): void;
}

export class PayloadCommand implements Command {
    private payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }

    execute(): void {
        console.log(`Payload: Faça coisas simples como imprimir (${this.payload})`)
    }
}

export class MathCommand implements Command {
    private receiver: MathMethods;

    /**
     * Dados de context, necessários para chamar os methodos do receptor
     */
    private a: number;
    private b: number;

    /**
     * Comandos complexos podem aceitar um ou vários objetos receptores junto
     * com quaisquer dados de contexto por meio do construtor
     */
    constructor(receiver: MathMethods, a: number, b: number){
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }

    /**
     * Os comandos podem delegar a qualquer método de um receptor
     */
    execute(): void {
        console.log('ComplexCommand: Coisas complexas devem ser feitas por um receptor')
        this.receiver.do(this.a, this.b);
    }
}

export interface MathMethods {
    do(a: number, b: number): void
}

export class Multiplier implements MathMethods {
    do(a: number, b: number): void {
        console.log('result', a*b);
    }
}

export class Minus implements MathMethods {
    do(a: number, b: number): void {
        console.log('result', a-b);
    }
}

export class Invoker {
    private commands: Command[] = [];

    add(c: Command) {
        this.commands.push(c);
    }

    executeAll() {
        this.commands.forEach(c => c.execute());
    }
}

const invoker = new Invoker();
invoker.add(new PayloadCommand('Diga Oi'));
invoker.add(new PayloadCommand('Onda'));
invoker.add(new MathCommand(new Multiplier(), 3, 4));
invoker.add(new MathCommand(new Minus(), 3, 4));
invoker.add(new PayloadCommand('fim'));
invoker.executeAll();