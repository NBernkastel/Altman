import {Reducer} from "react";
import {State} from "./State";
import {Action, AddStudent, AddStudentToCourse, ChangeStudentGrade, MarkStudent} from "./action";
import {Course} from "../data/Course";

// @ts-ignore //TODO HERE
const markReducer: Reducer<State, Action> = (state, action) => {
  switch (true) {
    case action instanceof MarkStudent:
      return {
        ...state,
        courses: state.courses.map(course =>
          course.id === (action as MarkStudent).courseId
            ? updateCourse(course, action as MarkStudent)
            : course
        ),
      };
    case action instanceof ChangeStudentGrade:
      return {
        ...state,
        courses: state.courses.map(course =>
          course.id === (action as ChangeStudentGrade).courseId
            ? changeStudentGrade(course, action as ChangeStudentGrade)
            : course
        ),
      };
    case action instanceof AddStudent:
      return {
        ...state,
        students: [...state.students, (action as AddStudent).student],
      };
    case action instanceof AddStudentToCourse:
      return addStudentToCourse(state, action as AddStudentToCourse);
    default:
      return state;
  }
};

const addStudentToCourse = (state: State, action: AddStudentToCourse): State => {
  const student = state.students.find(student => student.id === action.studentId);
  const course = state.courses.find(course => course.id === action.courseId);

  if (student && course) {
    // @ts-ignore //TODO HERE
      const updatedCourse: Course = {
        ...course,
        students: [...course.students, student],
        grades: [...course.grades, 2],
        marked: [...course.marked, false],
    };

    const updatedCourses = state.courses.map(c =>
      c.id === action.courseId ? updatedCourse : c
    );

    return new State(updatedCourses, state.students)
  }

  return state;
};

const updateCourse = (course: Course, action: MarkStudent): Course => {
  const markIndex = course.students.findIndex(student => student.id === action.studentId);

  if (markIndex !== -1) {
      // @ts-ignore
    return {
      ...course,
      marked: course.marked.map((mark, index) => (index === markIndex ? !mark : mark)),
    };
  }

  return course;
};

const changeStudentGrade = (course: Course, action: ChangeStudentGrade): Course => {
  const gradeIndex = course.students.findIndex(student => student.id === action.studentId);

  if (gradeIndex !== -1) {
    const updatedGrades = [...course.grades];
    updatedGrades[gradeIndex] = action.grade;
      return new Course(course.name, course.students, updatedGrades, course.marked)
  }

  return course;
};

export default markReducer;