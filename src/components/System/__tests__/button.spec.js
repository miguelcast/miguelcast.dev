import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";

it("Test component <Button /> render", () => {
  const BUTTON_TEXT = "Hello World";

  render(<Button>{BUTTON_TEXT}</Button>);

  const button = screen.getByRole("button");

  expect(button).toHaveTextContent(BUTTON_TEXT);
});

it("Test component <Button /> click", () => {
  const BUTTON_TEXT = "Hello World";
  const onClick = jest.fn();

  render(<Button onClick={onClick}>{BUTTON_TEXT}</Button>);

  const button = screen.getByRole("button");

  fireEvent.click(button);

  expect(button).toHaveTextContent(BUTTON_TEXT);
  expect(onClick).toHaveBeenCalled();
});
