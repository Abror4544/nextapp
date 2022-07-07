import { render, cleanup, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom";
import Preloader from "./Preloader";

afterEach(cleanup);

describe("Heading", () => {
  it("Renders without crash", () => {
    render(<Preloader />);
  });

  it("Contains image", () => {
    const { container } = render(<Preloader />);

    const img = getByTestId(container, "img");

    expect(img).toBeInTheDocument();
  });
});
