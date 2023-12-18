import {Student} from "../data/Student"
import {useContext} from "react";
import {contextMode} from "../App";

interface StudentProps {
    student: Student
}

function SingleStudentComponent(props: StudentProps){
    return(
        <div>
            {useContext(contextMode).mode === 'Short' ? `${props.student.firstname[0]}. ${props.student.surname}` : `${props.student.firstname} ${props.student.surname}`}
        </div>
    )
}

export default SingleStudentComponent