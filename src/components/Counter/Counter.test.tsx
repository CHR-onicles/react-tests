import { cleanup, fireEvent, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { Counter } from "./index";

// Cleanup DOM after each test
afterEach(() => {
  cleanup();
});

describe("Counter", () => {
  it("Counter renders in the document", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    expect(getByTestId("count")).toBeInTheDocument();
  });

  it("Counter displays correct initial value", () => {
    const { getByTestId } = render(<Counter initialCount={55} />);
    const countValue = getByTestId("count").textContent;
    expect(countValue).toEqual("55");
  });

  it("Count should increase by 1 if the increment button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={55} />);
    const incrementBtn = getByRole("button", { name: "Increment" });
    const countValue1 = getByTestId("count").textContent;
    expect(countValue1).toEqual("55");

    fireEvent.click(incrementBtn);

    const countValue2 = getByTestId("count").textContent;
    expect(countValue2).toEqual("56");
  });

  it("Count should decrease by 1 if the decrement button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={55} />);
    const decrementBtn = getByRole("button", { name: "Decrement" });
    const countValue1 = getByTestId("count").textContent;
    expect(countValue1).toEqual("55");

    fireEvent.click(decrementBtn);

    const countValue2 = getByTestId("count").textContent;
    expect(countValue2).toEqual("54");
  });

  it("Count should reset to 0 if the Reset button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={33} />);
    const resetBtn = getByRole("button", { name: "Reset" });
    const countValue1 = getByTestId("count").textContent;
    expect(countValue1).toEqual("33");

    fireEvent.click(resetBtn);
    const countValue2 = getByTestId("count").textContent;
    expect(countValue2).toEqual("0");
  });

  it("Count should invert sign if the Switch sign button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={33} />);
    const switchSignBtn = getByRole("button", { name: "Switch sign" });
    const countValue1 = getByTestId("count").textContent;
    expect(countValue1).toEqual("33");

    fireEvent.click(switchSignBtn);
    const countValue2 = getByTestId("count").textContent;
    expect(countValue2).toEqual("-33");

    fireEvent.click(switchSignBtn);
    const countValue3 = getByTestId("count").textContent;
    expect(countValue3).toEqual("33");
  });
});

it("Func should be called", () => {
  const handleClick = vi.fn();
  const { getByRole } = render(
    <Counter initialCount={0} increaseByOne={handleClick} />
  );

  const btn = getByRole("button", { name: "Prop click" });

  fireEvent.click(btn);
  expect(handleClick).toHaveBeenCalledOnce();
});
