import { render, screen } from "@testing-library/react";
import Home from ".";

describe("<Home />", () => {
  test("render", () => {
    render(<Home />);
    const homeElement = screen.getByText("Feed de Insights");

    expect(homeElement).toBeInTheDocument();
  });
});
