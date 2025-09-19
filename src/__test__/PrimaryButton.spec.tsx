import PrimaryButton from "~components/primary-button";

import { render, screen, userEvent } from "./test-utils";

const defaultProps = {
  title: "click me",
  onClick: jest.fn(),
};

describe("testing primary button", () => {
  it("test title in button", () => {
    render(<PrimaryButton {...defaultProps} />);
    screen.getByRole("button", { name: /click me/u });
  });
  it("test button click", async () => {
    render(<PrimaryButton {...defaultProps} />);
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: /click me/u });
    await user.click(button);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
});
