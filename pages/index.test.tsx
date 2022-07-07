import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home, { getStaticProps } from "./index";
import mockAxios from "axios";

afterEach(cleanup);

const mockedAxios = mockAxios as jest.Mocked<typeof mockAxios>;

describe("Index", () => {
  it("Renders without crash", () => {
    render(<Home />);
  });

  it("call axios and return data", async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          socials: [
            {
              id: 1,
              icon: "youtube",
              path: "https://youtube.com/AbrorAbdusalomov",
            },
          ],
        },
      })
    );

    const data = await getStaticProps();

    expect(data?.props?.socials.socials).toEqual([
      {
        id: 1,
        icon: "youtube",
        path: "https://youtube.com/AbrorAbdusalomov",
      },
    ]);

    expect(mockedAxios.get).toHaveBeenCalledTimes(1)
    expect(mockedAxios.get).toHaveBeenCalledWith(`${process.env.API_HOST}/socials`)
  });
});
