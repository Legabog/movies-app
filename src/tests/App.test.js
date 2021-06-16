import { render, act, cleanup } from "@testing-library/react";
import axios from "axios";
import App from "../App";

jest.mock("axios");
afterEach(cleanup);

describe("App", () => {
  it("fetches films data from Api", async () => {
    const url = "https://yts.mx/api/v2";
    render(<App />);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `${url}/list_movies.json?limit=24&page=1`
    );
  });
});
