import TextInput from "~components/text-input";

import { render } from "./test-utils";
const defaultProps = {
  label: "Input",
  defaultValue: "default",
  value: "value",
  disabled: true,
};
describe("testing TextInput component", () => {
  it("renders the TextInput with the provided props", () => {
    const { getByRole } = render(<TextInput {...defaultProps} />);
    const value = new RegExp(defaultProps.label, "u");
    const input = getByRole("textbox", { name: value });
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("disabled");
  });
});
