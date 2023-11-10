export interface Staff {
	salary: number;
	about(): string;
}

export class Manager implements Staff {
	salary = 4500;
	about(): string {
		return `Eu sou um gerente com um salário de ${this.salary} reais`;
	}
}

export class Recruiter implements Staff {
	salary = 4000;
	about(): string {
		return `Eu sou um recrutador com um salário de ${this.salary} reais`;
	}
}

const userMap = {
	recruiter: Recruiter,
	manager: Manager,
};
type Keys = keyof typeof userMap;

class StaffFactory {
	static getStaffInstance(k: Keys): Staff {
		return new userMap[k]();
	}
}

class UserService {
	static getAbout(userType: Keys) {
		return StaffFactory.getStaffInstance(userType).about();
	}
	static getSalary(userType: Keys) {
		return StaffFactory.getStaffInstance(userType).salary;
	}
}

console.log(UserService.getAbout("manager"));
console.log(UserService.getAbout("recruiter"));
