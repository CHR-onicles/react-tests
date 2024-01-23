import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Counter } from "./index";


describe("Counter", () => {
  const { getByTestId, getByRole } = render(<Counter initialCount={0} />);

  it("Counter displays correct initial value", () => {
    const countValue = getByTestId("count").textContent;
    expect(countValue).toEqual("0");
  });

  it("Count should increase by 1 if the increment button is clicked", () => {
    const incrementBtn = getByRole("button", { name: "Increment" });
    const countValue1 = getByTestId("count").textContent;
    expect(countValue1).toEqual("0");

    fireEvent.click(incrementBtn);

    const countValue2 = getByTestId("count").textContent;
    expect(countValue2).toEqual("1");
  });

  it("Count should decrease by 1 if the decrement button is clicked", () => {
    const decrementBtn = getByRole("button", { name: "Decrement" });
    const countValue1 = getByTestId("count").textContent;
    expect(countValue1).toEqual("1");

    fireEvent.click(decrementBtn);

    const countValue2 = getByTestId("count").textContent;
    expect(countValue2).toEqual("0");
  });

  it("Count should reset to 0 if the Reset button is clicked", () => {
    const decrementBtn = getByRole("button", { name: "Decrement" });
    const resetBtn = getByRole("button", { name: "Reset" });
    const countValue1 = getByTestId("count").textContent;
    expect(countValue1).toEqual("0");

    fireEvent.click(decrementBtn);
    const countValue2 = getByTestId("count").textContent;
    expect(countValue2).toEqual("-1");

    fireEvent.click(resetBtn);
    const countValue3 = getByTestId("count").textContent;
    expect(countValue3).toEqual("0");
  });

  it("Count should invert sign if the Switch sign button is clicked", () => {
    const decrementBtn = getByRole("button", { name: "Decrement" });
    const switchSignBtn = getByRole("button", { name: "Switch sign" });
    const countValue1 = getByTestId("count").textContent;
    expect(countValue1).toEqual("0");

    fireEvent.click(decrementBtn);
    const countValue2 = getByTestId("count").textContent;
    expect(countValue2).toEqual("-1");

    fireEvent.click(switchSignBtn);
    const countValue3 = getByTestId("count").textContent;
    expect(countValue3).toEqual("1");

    fireEvent.click(switchSignBtn);
    const countValue4 = getByTestId("count").textContent;
    expect(countValue4).toEqual("-1");
  });
});
