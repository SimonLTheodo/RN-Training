import Pokedex from "../../../src/components/Pokedex/Pokedex";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react-native";

describe("<Pokedex />", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  it("Displays pokemon", () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        results: [
          {
            id: 1,
            name: "bulbasaur",
            url: "https://pokeapi.co/api/v2/pokemon/1/",
          },
          {
            id: 2,
            name: "ivysaur",
            url: "https://pokeapi.co/api/v2/pokemon/2/",
          },
          {
            id: 3,
            name: "venusaur",
            url: "https://pokeapi.co/api/v2/pokemon/3/",
          },
          {
            id: 4,
            name: "charmander",
            url: "https://pokeapi.co/api/v2/pokemon/4/",
          },
        ],
      })
    );
    render(<Pokedex navigation={jest.fn()} />);
    expect(screen.findByText("bulbasaur"));
    expect(screen.findByText("charmander"));
  });
});
