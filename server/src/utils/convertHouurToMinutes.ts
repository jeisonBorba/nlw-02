const TOTAL_MINUTES = 60;

export default function convertHourToMinutes(time: string) {
  const [ hour, minutes ] = time.split(':').map(Number);
  const timeInMinutes = (hour * TOTAL_MINUTES) + minutes;

  return timeInMinutes;
}