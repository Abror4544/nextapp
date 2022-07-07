import { render, cleanup, getByRole, getByText } from "@testing-library/react";
import "@testing-library/jest-dom";
import Layout from "./Layout";

afterEach(cleanup);

describe("Layout", () => {
  it("Render without crash", () => {
    const { container } = render(<Layout>{}</Layout>);

    const header = getByRole(container, "heading");

    const footer = getByText(container, "Copyright Abror Abdusalomov ©");

    expect(header).toBeInTheDocument();

    expect(footer).toBeInTheDocument();
  });
});
