const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export function formatExperienceDate(from: Date) {
  return `${months[from.getMonth()]} ${from.getFullYear()}`;
}
