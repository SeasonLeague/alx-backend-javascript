export default function updateStudentGradeByCity(students, city, newGrade) {
  const newArray = students.map((student) => {
    const studentGrade = newGrade.filter((grade) => grade.studentId === student.id)
      .map((grade) => grade.grade)[0];
    // eslint-disable-next-line no-param-reassign
    student.grade = studentGrade || 'N/A';
    return student;
  });
  return newArray.filter((student) => student.location === city);
}
