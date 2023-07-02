import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(<Input />);

  const label = screen.getByRole("name", { name: /name/i });
  expect(label).toBeInTheDocument();
});

test("calls callback on every user input", async () => {});
