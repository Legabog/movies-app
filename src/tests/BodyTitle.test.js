import { render, screen } from "@testing-library/react";
import { BodyTitle } from "../containers/Body/components/BodyTitle";

describe("BodyTitle", () => {
  const validStrings = ["All movies.", "All movies. There are 100 movies.", "All movies. There are 322500 movies."]

  it("movieCount = null", () => {
    render(<BodyTitle movieCount={null} />);
    expect(screen.getByText(validStrings[0])).toBeInTheDocument();
  });
  it("movieCount = undefined", () => {
    render(<BodyTitle />);
    expect(screen.getByText(validStrings[0])).toBeInTheDocument();
  });
  it("movieCount = number 100", () => {
    render(<BodyTitle movieCount={100} />);
    expect(screen.getByText(validStrings[1])).toBeInTheDocument();
  });
  it("movieCount = number 322500", () => {
    render(<BodyTitle movieCount={322500} />);
    expect(screen.getByText(validStrings[2])).toBeInTheDocument();
  });
  it("movieCount = string 100", () => {
    render(<BodyTitle movieCount={"100"} />);
    expect(screen.getByText(validStrings[1])).toBeInTheDocument();
  });
  it("movieCount = string 322500", () => {
    render(<BodyTitle movieCount={"322500"} />);
    expect(screen.getByText(validStrings[2])).toBeInTheDocument();
  });
});
