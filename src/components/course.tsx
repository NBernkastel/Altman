import {Course} from "../data/Course";
import {Student, StudentId} from "../data/Student"
import {useRef} from "react";
import StudentListComponent from "./StudentList";

interface CourseProps {
    course: Course
    mark: (studentId: StudentId) => void
    grade: (studentId: StudentId, grade: number) => void
    candidates: Student[]
    addStudent: (studentId: StudentId) => void
}

function CourseComponent(props: CourseProps) {
    let addStudentSelectRef = useRef<HTMLSelectElement>(null)
    return (
        <div>
            <h3>
                {props.course.name}
            </h3>
            <details>
                <summary>
                    Add Student
                </summary>
                <select ref={addStudentSelectRef}>
                    {props.candidates.map((student) => (
                        <option>
                            {student.id}
                        </option>
                    ))}
                </select>
                <button onClick={e => {
                    if(addStudentSelectRef.current)
                        props.addStudent(addStudentSelectRef.current.value)
                }}>
                    Add
                </button>
            </details>
                <StudentListComponent list={props.course.students}
                                      marked = {props.course.marked}
                                      grades ={props.course.grades}
                                      clickId ={(id) => props.mark(id)}
                                      gradeId ={(studentId,grade) => props.grade(studentId,grade)}/>
        </div>
    )
}

export default CourseComponent