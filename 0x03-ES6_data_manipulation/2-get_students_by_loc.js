export default function getListStudentIds(array, city) {
  return array.filter((array) => array.location === city);
}
