import {Student, studentList} from "./Student";

export class Course {
    constructor(
        public name: string,
        public students: Student[],
        public grades: number[] = students.map(() => 2),
        public marked: Boolean[] = students.map(() => false)
    ) {
    }

    get id(): CourseId {
        return this.name
    }
}

export let courseList: Course[]
courseList = [
    new Course("Math", studentList),
    new Course("Phys", studentList),
    new Course("Story", studentList),
]


export type CourseId = String