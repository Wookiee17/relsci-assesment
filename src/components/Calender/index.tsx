import { FC } from "react";
import "./styles.css";
import { DatesTable } from "./DatesTable";
import React from "react";

interface Props {
  date?: Date;
}

export const Calender: FC<Props> = React.memo(({ date = new Date() }) => {
  return (
    <div data-testid="calender-container">
      <DatesTable date={date} />
    </div>
  );
});
