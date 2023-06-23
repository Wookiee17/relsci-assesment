import { months } from "../utils";

export const useCalenderDates = (date: Date) => {
  const month = date.getMonth();
  const year = date.getFullYear();

  const getMonthAndYear = () => {
    return `${months[month]} ${year}`;
  };

  const getNumberOfDaysInMonth = (): number => {
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    return lastDayOfMonth;
  };

  const getFirstDayIndex = (): number => {
    const firstDayOfMonth = new Date(year, month, 1);
    return firstDayOfMonth.getDay();
  };

  return { getMonthAndYear, getNumberOfDaysInMonth, getFirstDayIndex };
};
