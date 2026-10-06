import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import LearningPreview from "./LearningPreview";

afterEach(cleanup);
describe("InvestSwipe learning preview", () => {
  it("lets a beginner make a diversified choice, read feedback and restart", async () => {
    render(<LearningPreview />);
    fireEvent.click(screen.getByRole("button", { name: "Try a practice decision" }));
    fireEvent.click(await screen.findByRole("button", { name: /Several companies/ }));
    expect(await screen.findByText(/Less dependence/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Join the beta waitlist" })).toHaveAttribute("href", "#waitlist");
    fireEvent.click(screen.getByRole("button", { name: "Try the lesson again" }));
    expect(await screen.findByRole("button", { name: "Try a practice decision" })).toBeInTheDocument();
  });
  it("explains concentration risk after choosing one company", async () => {
    render(<LearningPreview />);
    fireEvent.click(screen.getByRole("button", { name: "Try a practice decision" }));
    fireEvent.click(await screen.findByRole("button", { name: /One company/ }));
    expect(await screen.findByText(/Putting every credit in A/)).toBeInTheDocument();
    expect(screen.getByText(/does not guarantee a profit/)).toBeInTheDocument();
  });
});
