export const parseTime = (timeStr: string) => {
  const [hours, minutes, seconds] = timeStr.split(":").map(Number);
  return new Date(0, 0, 0, hours, minutes, seconds);
};
