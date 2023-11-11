interface HeaterState {
	doAction(context: Heater): void;
}

class TurnOffState implements HeaterState {
	doAction(context: Heater): void {
		console.log("Ligue o aquecedor");
		context.state = new StandOneState();
		console.log("Soprando ar quente ~~~");
	}
}

class StandOneState implements HeaterState {
	doAction(context: Heater): void {
		context.state = new StandTwoState();
		console.log("Soprando ar quente ~~~ ligar padrão dois");
	}
}

class StandTwoState implements HeaterState {
	doAction(context: Heater): void {
		context.state = new StandThreeState();
		console.log("Soprando ar quente ~~~ ligar padrão três");
	}
}

class StandThreeState implements HeaterState {
	doAction(context: Heater): void {
		context.state = new TurnOffState();
		console.log("Soprando ar quente ~~~ Deligar o aquecedor");
	}
}

class Heater {
	state: HeaterState;

	constructor(state: HeaterState) {
		this.state = state;
	}

	switchMode() {
		this.state.doAction(this);
	}
}

const heater = new Heater(new TurnOffState());
heater.switchMode();
heater.switchMode();
heater.switchMode();
heater.switchMode();
