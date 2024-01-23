import { fireEvent,render } from "@testing-library/react";
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
    fireEvent.click(incrementBtn);
    const countValue = getByTestId("count").textContent;

    expect(countValue).toEqual("1");
  });
});
