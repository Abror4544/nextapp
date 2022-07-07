import { render, cleanup, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import Socials from "./Socials";

afterEach(cleanup);

describe("Heading", () => {
  it("Renders without crash", () => {
    render(<Socials socials={[]} />);
  });

});
