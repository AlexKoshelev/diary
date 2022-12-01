const DAY_IN_WEEK = 7;
const DAY_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const Month = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};
export function areEqual(a, b) {
  if (!a || !b) return false;

  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

//возвращаем либо true в высокосный год, либо false в обычный год
export function isLeepYear(year) {
  return !(year % 4 || (!(year % 100) && year % 400));
}
export function getDaysInMonth(date) {
  const month = date.getMonth();
  const year = date.getFullYear();
  const daysInMonth = DAY_IN_MONTH[month];

  if (isLeepYear(year) && month === Month.February) {
    return daysInMonth + 1;
  } else {
    return daysInMonth;
  }
}
export function getDayOfWeek(date) {
  const dayOfWeek = date.getDay();
  if (dayOfWeek === 0) return 6;
  return dayOfWeek - 1;
}
export function getMonthDate(year, month) {
  const result = [];
  const date = new Date(year, month);

  //получаем количество дней в месяце
  const daysInMonth = getDaysInMonth(date);

  //получаем день, с которого начинается месяц
  const monthStartsOn = getDayOfWeek(date);

  let day = 1;

  for (let i = 0; i < (daysInMonth + monthStartsOn) / DAY_IN_WEEK; i++) {
    result[i] = [];
    for (let j = 0; j < DAY_IN_WEEK; j++) {
      if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
        result[i][j] = undefined;
      } else {
        result[i][j] = new Date(year, month, day++);
      }
    }
  }
  /*   console.log(result); */

  return result;
}
