import { render, screen } from "@testing-library/react";
import Search from ".";

describe("<Home />", () => {
  test("render search", () => {
    render(<Search />);

    const searchElement = screen.getByPlaceholderText(
      "Pesquise por termos ou categorias"
    );

    expect(searchElement).toBeInTheDocument();
  });
});
