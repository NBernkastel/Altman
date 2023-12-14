import {CourseId} from "../data/Course";
import {Student, StudentId} from "../data/Student";

export interface Action{
}


export class MarkStudent implements Action{constructor(public courseId: CourseId, public studentId: StudentId) {}}

export class ChangeStudentGrade implements Action{
    constructor(public courseId: CourseId | undefined, public studentId: StudentId, public grade: number) {}}

export class AddStudentToCourse implements Action{
    constructor(public courseId: CourseId | undefined, public studentId: StudentId) {}}

export class AddStudent implements Action{constructor(public student: Student) {}}