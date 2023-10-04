export default function getIdsSum(students) {
  return students.reduce((acc, value) => (acc + value.id), 0);
}
