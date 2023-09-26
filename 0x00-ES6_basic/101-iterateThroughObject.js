export default function iterateThroughObject(reportWithIterator) {
  let items = ''; let i = 0;
  for (const item of reportWithIterator) {
    if (reportWithIterator.length - 1 === i) {
      items += item;
    } else {
      items += `${item} | `;
    }
    // eslint-disable-next-line no-plusplus
    i++;
  }
  return items;
}
