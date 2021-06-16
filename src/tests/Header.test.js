import { render, screen } from "@testing-library/react";
import { Header } from "../containers/Header";

describe("Header", () => {
  it("render valid string in Header", () => {
    const validString = "Movies app";
    render(<Header />);
    expect(screen.getByText(validString)).toBeInTheDocument();
  });
});
