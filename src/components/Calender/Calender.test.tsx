import { render, screen } from "@testing-library/react";
import { Calender } from ".";
import { useCalenderDates } from "./hooks";

const renderComponent = (date?: Date) => {
  render(<Calender date={date} />);
};

describe("Calender Component", () => {
  it("renders calender for current date and month if no date is provided", () => {
    const { getMonthAndYear } = useCalenderDates(new Date());
    const monthAndYear = getMonthAndYear();
    const givenDate = new Date().getDate();
    renderComponent();

    const calenderHeading = screen.getByText(monthAndYear);
    expect(calenderHeading).toBeInTheDocument();

    const highlightedDate = screen.getByText(givenDate);
    expect(highlightedDate).toHaveClass("highlight");
  });

  it("renders calender for provided date", () => {
    const date = new Date(1, 1, 2015);

    const { getMonthAndYear } = useCalenderDates(date);
    const monthAndYear = getMonthAndYear();

    renderComponent(date);
    const calenderHeading = screen.getByText(monthAndYear);
    expect(calenderHeading).toBeInTheDocument();
  });

  it("given date is highlighted", () => {
    const givenDate = new Date().getDate();
    renderComponent();

    const highlightedDate = screen.getByText(givenDate);
    expect(highlightedDate).toHaveClass("highlight");
  });
});
