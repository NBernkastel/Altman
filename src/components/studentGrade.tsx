import React, {useContext, useEffect} from "react";
import {contextMode} from "../App";

interface GradeProps {
    grade: number
    setGrade: (grade: number) => void
}


function StudentGradeComponent(props: GradeProps) {

    const css: React.CSSProperties = {
        width: 30,
        backgroundColor: useContext(contextMode).colors[props.grade - 1]
    };
    const handleStepClick = () => {
        const newGrade = props.grade < 5 ? props.grade + 1 : props.grade - 3;
        props.setGrade(newGrade);
    };

    return (
        <div>
            <span style={css}>
                {props.grade.toString()}
            </span>
            <button onClick={handleStepClick}>
                step
            </button>
        </div>
    )
}

export default StudentGradeComponent