export const getUniqueArray = <T>(
  items: T[],
  compare: (a: T, b: T) => boolean
) => {
  const uniqueArray: T[] = [];
  for (const item of items) {
    let exist = false;
    for (const existingItem of uniqueArray) {
      if (compare(item, existingItem)) {
        exist = true;
        break;
      }
    }
    if (!exist) {
      uniqueArray.push(item);
    }
  }
  return uniqueArray;
};
