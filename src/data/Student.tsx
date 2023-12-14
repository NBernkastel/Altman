export class Student {
    constructor(public firstname: string, public surname: string) {
    }

    public get id(): StudentId {
        return `${this.firstname} ${this.surname}`
    }
}

export let studentList: Student[];
studentList = [
    new Student("TyafTyafich", "Tyafovich"),
    new Student("Sharik", "Sharikovich"),
    new Student("Bobik", "Bobikovich")
]

export type StudentId = String