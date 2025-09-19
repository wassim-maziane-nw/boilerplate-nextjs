import BaseButton from "~components/base-button";

import { render, screen, userEvent } from "./test-utils";

const defaultProps = {
  title: "click",
  onClick: jest.fn(),
};

describe("Testing BaseButton component", () => {
  it("test title in button", () => {
    render(<BaseButton {...defaultProps} />);
    const button = screen.getByRole("button", { name: /click/u });
    expect(button).toBeInTheDocument();
  });
  it("test button click", async () => {
    render(<BaseButton {...defaultProps} />);
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: /click/u });
    await user.click(button);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
});
