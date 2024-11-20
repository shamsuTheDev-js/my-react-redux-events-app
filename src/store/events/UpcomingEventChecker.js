export const isUpcoming = (event) => {
  const today = {
    date: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  };

  const current = {
    date: event.dateAsNumber.date,
    month: event.dateAsNumber.month,
    year: event.dateAsNumber.year,
  };
  if (current.year === today.year && current.month === today.month) {
    let daysLength = current.date - today.date;
    if (daysLength <= 7) {
      //console.log(event, true);
      return true;
      // processedEventsRef.current.add(eventKey);
    }
    return false;
  } else if (current.month - today.month === 1 && current.year === today.year) {
    let monthLength = 0;
    if (today.month === 1) {
      monthLength = 28;
    } else if ([3, 5, 8, 10].includes(today.month)) {
      monthLength = 30;
    } else {
      monthLength = 31;
    }
    let dayLength = monthLength - today.date + current.date;
    if (dayLength <= 7) {
      // processedEventsRef.current.add(eventKey);
      return true;
    } else {
      return false;
    }
  }
  return false;
};
