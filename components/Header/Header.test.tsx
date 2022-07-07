import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

afterEach(cleanup);

describe("Header", () => {
  it("Render without crash", () => {
    render(<Header />);
  });
});
