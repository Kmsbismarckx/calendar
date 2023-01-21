import { Dayjs } from "dayjs";

const dateToString = (date: number): string => String(date).padStart(2, "0");

export const formatDate = (date: Dayjs): string => {
  const year = date.year();
  const month = dateToString(date.month() + 1);
  const day = dateToString(date.date());
  return `${year}.${month}.${day}`;
};
