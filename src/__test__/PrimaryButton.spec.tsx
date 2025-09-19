import PrimaryButton from "~components/primary-button";

import { render, screen, userEvent } from "./test-utils";

const defaultProps = {
  text: "click me",
  onClick: jest.fn(),
};

describe("testing primary button", () => {
  it("test text in button", () => {
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
