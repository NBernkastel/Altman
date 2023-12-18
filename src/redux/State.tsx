import {Course, CourseId, courseList} from "../data/Course";
import {Student, StudentId, studentList} from "../data/Student";


export class State {
    constructor(public courses: Course[], public students: Student[]) {
    }

    getStudentsById(studentId: StudentId) {
        return this.students.find((e) => {
            return e.id === studentId
        })
    }

    getCourseById(courseId: CourseId) {
        return this.courses.find((e) => {
            return e.id === courseId
        })
    }
 //TODO ПРОВЕРИТЬ ИСПОЛЬЗУЮТСЯ ЛИ ЭТИ МЕТОДЫ
}

export function testState() {
    return new State(
        courseList,
        studentList
    )
}