import { render, cleanup, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";
import { navigation } from "./Navbar";

afterEach(cleanup);

describe("Navbar", () => {
  it("Render without crash", () => {
    render(<Navbar />);
  });

  it("Return and show correct navs", () => {
    const { container } = render(<Navbar />);

    const resultArr = [];

    const errors = [];

    for (let i = 0; i < navigation.length; i++) {
      resultArr.push(getByTestId(container, navigation[i].id.toString()));
    }

    expect(resultArr.length).toBe(navigation.length);

    for (let k = 0; k < navigation.length; k++) {
      if (
        navigation[k].title !== resultArr[k].textContent ||
        navigation[k].path !== resultArr[k].getAttribute("href")
      ) {
        errors.push(navigation[k]);
      }
    }

    expect(errors.length).toBe(0);
  });
});
