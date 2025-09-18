import Home from "~components/home/Home";

import { render } from "./test-utils";

describe("Testing page example", () => {
  it("should find the background image", () => {
    const { container } = render(<Home />);
    const backgroundDiv = container.getElementsByClassName("background-div");
    expect(backgroundDiv.length).toBe(1);
  });
});
