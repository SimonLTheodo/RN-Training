import App from "../App";
import React from "react";
import { render, screen } from "@testing-library/react-native";

describe("<App />", () => {
  it("matches snapshot", () => {
    render(<App />);
    expect(screen.getAllByText("Pokedex")).toHaveLength(2);
  });
});
