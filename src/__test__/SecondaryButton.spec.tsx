import SecondaryButton from "~components/secondary-button";

import { fireEvent, render } from "./test-utils";

const defaultProps = {
  title: "click me",
  onClick: jest.fn(),
};

describe("testing secondary button", () => {
  it("testing text existence", () => {
    const { getByText } = render(<SecondaryButton {...defaultProps} />);
    expect(getByText(/click me/u)).toBeInTheDocument();
  });
  it("testing button clicking", () => {
    const { getByRole } = render(<SecondaryButton {...defaultProps} />);
    const button = getByRole("button");
    fireEvent.click(button);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
});
