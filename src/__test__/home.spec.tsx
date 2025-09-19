import Home from "~components/home/Home";

import { render, userEvent } from "./test-utils";

const mockRouter = {
  push: jest.fn(),
};

jest.mock("next/navigation", () => ({
  useRouter: () => mockRouter,
}));

describe("Testing Home page component", () => {
  it("should find the background image", () => {
    const { container } = render(<Home />);
    const backgroundDiv = container.getElementsByClassName("background-div");
    expect(backgroundDiv.length).toBe(1);
  });
  it("test", async () => {
    const { getByRole } = render(<Home />);
    const button = getByRole("button", { name: /Se connecter/u });
    const user = userEvent.setup();
    await user.click(button);
    expect(mockRouter.push).toHaveBeenCalledWith("/signin");
  });
});
