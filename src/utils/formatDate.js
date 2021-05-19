export const formatDate = date => {
  let time = new Date(date);
  let seconds = Math.floor((new Date() - time) / 1000);

  let interval = seconds / 86400;
  if (interval > 30) {
    let day = time.getDate();
    if (day < 9) day = '0' + day;
    let month = time.getMonth();
    if (month < 9) month = '0' + month;

    return [day, month, time.getFullYear()].join('.');
  }

  const condition1 = interval => interval % 10 === 1 && interval !== 11;
  const condition2 = interval => (interval % 10 === 2 && interval !== 12) ||
        (interval % 10 === 3 && interval !== 13) ||
        (interval % 10 === 4 && interval !== 14);

  if (interval > 1) {
    let days = 'дней';
    if (condition1) days = 'день';
    else if (condition2) days = 'дня';
    return Math.floor(interval) + ` ${days} назад`;
  }
  interval = seconds / 3600;
  if (interval > 1) {
    let hours = 'часов';
    if (condition1) hours = 'час';
    else if (condition2) hours = 'часа';
    return Math.floor(interval) + ` ${hours} назад`;
  }
  interval = seconds / 60;
  if (interval > 1) {
    let minutes = 'минут';
    if (condition1) minutes = 'минуту';
    else if ((condition2)) minutes = 'минуты';
    return Math.floor(interval) + ` ${minutes} назад`;
  }
  let sec = 'секунд';
  if (condition1) sec = 'секунду';
  else if (condition2) sec = 'секунды';
  return Math.floor(seconds) + ` ${sec} назад`;
};