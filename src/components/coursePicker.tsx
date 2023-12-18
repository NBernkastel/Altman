import {StudentId} from "../data/Student";
import {State} from "../redux/State";
import {Action, AddStudentToCourse, ChangeStudentGrade, MarkStudent} from "../redux/action"
import {useParams} from "react-router-dom";
import CourseComponent from "./course";

export interface CoursePickerProps {
    state: State
    dispatch: (action: Action) => void
}

function CoursePickerComponent(props: CoursePickerProps) {
    let params = useParams()
    let courseName = params["name"]
    let course = props.state.courses.find((e) => {
        return e.name === courseName
    })

    if (course === undefined) {
        return <div>No course with name {courseName}</div>
    }

    return (
        <CourseComponent
            course={course}
            mark={(studentId: StudentId) => {
                // @ts-ignore //TODO HERE
                props.dispatch(new MarkStudent(course.id, studentId))
            }}
            grade={(studentId: StudentId, grade: number) => {
                let newhangeStudentGrade = new ChangeStudentGrade(course?.id, studentId, grade)
                console.log(newhangeStudentGrade)
                console.log(grade)
                props.dispatch(newhangeStudentGrade)
        }}
            candidates={props.state.students.filter(e => !course?.students.includes(e))}
            addStudent={(studentId: StudentId) => props.dispatch(new AddStudentToCourse(course?.id, studentId))}
        />
    )

}

export default CoursePickerComponent