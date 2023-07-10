export function truncate(str: string, len: number, useWordBoundary = true) {
  if (str.length <= len) {
    return str;
  }
  const subString = str.slice(0, len - 1); // the original check
  return (useWordBoundary ? subString.slice(0, subString.lastIndexOf(" ")) : subString) + "...";
}
