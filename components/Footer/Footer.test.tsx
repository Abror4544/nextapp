import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

afterEach(cleanup);

describe("Footer", () => {
  it("Render without crash", () => {
    render(<Footer />);
  });
});
