import { render, screen } from "@testing-library/react";
import CreateInsight from ".";

describe("<Home />", () => {
  test("render createInsight", () => {
    render(<CreateInsight />);

    const searchElement = screen.getByPlaceholderText(
      "Escreva aqui o seu insight..."
    );

    expect(searchElement).toBeInTheDocument();
  });
});
