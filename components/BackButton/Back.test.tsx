import { render, cleanup, getByRole, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Back from "./Back";


afterEach(cleanup);


describe("Back Button", () => {

  it("Render correct", () => {
    const { container } = render(<Back />);

    const button = getByRole(container, "button");

    expect(button.textContent).toBe("Back");
  });
});
