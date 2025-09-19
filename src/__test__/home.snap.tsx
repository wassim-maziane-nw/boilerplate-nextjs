import HomePage from "~app/page";

import { render } from "./test-utils";

const mockRouter = {
  push: jest.fn(),
};

jest.mock("next/navigation", () => ({
  useRouter: () => mockRouter,
}));

describe("Testing page example", () => {
  it("should render home", () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });
});
