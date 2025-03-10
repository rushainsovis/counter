import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("renders counter app", () => {
  render(<App />);
expect(screen.getByText("Counter App")).toBeInTheDocument();
});

test("increments counter", () => {
  render(<App />);
  const incrementButton = screen.getByTestId("increment");
  fireEvent.click(incrementButton);
  expect(screen.getByTestId("count").textContent).toBe("Count: 1");
});

test("decrements counter", () => {
  render(<App />);
  const decrementButton = screen.getByTestId("decrement");
  fireEvent.click(decrementButton);
  expect(screen.getByTestId("count").textContent).toBe("Count: -1");
});