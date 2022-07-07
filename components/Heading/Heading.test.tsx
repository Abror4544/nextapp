import { render, cleanup, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom";
import Heading from "./Heading";

afterEach(cleanup);

describe("Heading", () => {
  it("should return correct tag and text attribute values", () => {
    const expectationText = "Result";

    const { container } = render(<Heading tag={"h3"} text={expectationText} />);

    const title = getByTestId(container, "head");

    expect(title.textContent).toBe(expectationText);

    expect(title?.tagName).toBe("H3");
  });
});
