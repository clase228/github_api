import { Button } from "./index";
import { screen, render } from "@testing-library/react";

describe("<Button />", () => {
  describe("Snapshots tests", () => {
    it("should render successfully and match snapshot", () => {
      const { container } = render(<Button>Click me</Button>);

      expect(container).toMatchSnapshot();
    });
  });

  describe("Attributes tests", () => {
    it('should set type="button" by default', () => {
      render(<Button>Click me</Button>);

      expect(screen.getByText("Click me")).toHaveAttribute("type", "button");
    });
  });
});