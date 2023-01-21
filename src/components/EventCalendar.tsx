import React, { FC } from "react";
import { Badge, Calendar } from "antd";
import { IEvent } from "../models/IEvent";
import { Dayjs } from "dayjs";
import { formatDate } from "../utils/date";

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = (props) => {
  const dateCellRender = (value: Dayjs) => {
    const formattedDate = formatDate(value);
    const currentDayEvents = props.events.filter(
      (e) => e.date === formattedDate
    );

    return (
      <ul className="events">
        {currentDayEvents.map((e, index) => (
          <li key={index}>
            <Badge status="success" text={e.description} />
          </li>
        ))}
      </ul>
    );
  };

  return <Calendar dateCellRender={dateCellRender} />;
};

export default EventCalendar;
