import React from "react";
import { CoursePickerProps } from "./coursePicker";
import { useParams } from "react-router-dom";
import SingleStudentComponent from "./student";

function GradePickerComponent(props: CoursePickerProps) {
  let params = useParams();
  let filter = params['listnum'];

  let filterStudents = props.state.courses[0].students.map((student, index) => {
    let grade = props.state.courses.map(e => e.grades[index]);

    if ((filter === "Great" && grade.every(e => e === 5)) ||
        (filter === "Bad" && grade.some(e => e === 2))) {
      return (
        <li key={index}>
          <SingleStudentComponent student={student} />
        </li>
      );
    } else {
      return null;
    }
  });

  if (filterStudents.every(item => item === null)) {
    return <div>Список Пуст</div>;
  }

  return (
    <div>
      <ol>
        {filterStudents}
      </ol>
    </div>
  );
}

export default GradePickerComponent;
