import { render, cleanup, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserInfo from "./UserInfo";

afterEach(cleanup);

describe("Heading", () => {
  it("Renders without crash", () => {
    render(
      <UserInfo
        user={{
          id: "",
          name: "",
          username: "",
          address: {
            city: "",
          },
          email: "",
          phone: "",
          website: "",
          company: {
            name: "",
          },
        }}
      />
    );
  });
});
