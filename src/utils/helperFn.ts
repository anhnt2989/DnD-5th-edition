// TODO: saved time, gonna fix typing later
/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
export const depthOf = (object: any) => {
  let level = 1;
  for (const key in object) {
    if (!object.hasOwnProperty(key)) continue;

    if (typeof object[key] == 'object') {
      const depth = depthOf(object[key]) + 1;
      level = Math.max(depth, level);
    }
  }
  return level;
}