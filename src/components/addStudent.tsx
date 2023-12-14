import React, {useRef} from 'react';
import {Student} from '../data/Student'

interface AddStudentProps {
    add: (newStudent: Student) => void
}

function CAddStudent(props: AddStudentProps) {
    let firstnameRef = useRef<HTMLInputElement | null>(null);
    let surnameRef = useRef<HTMLInputElement | null>(null);

    function addStudent() {
        if (firstnameRef.current && surnameRef.current) {
            const newStudent = new Student(
                firstnameRef.current.value,
                surnameRef.current.value
            );
            props.add(newStudent);
        }
    }

    return (
        <div>
            <label>firstname</label>
            <input ref={firstnameRef}/>
            <label>surname</label>
            <input ref={surnameRef}/>
            <button onClick={addStudent}>
                Add
            </button>
        </div>
    )
}

export default CAddStudent
