import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImg = screen.getByAltText("Hero Image");
    expect(heroImg).toBeInTheDocument();
    expect(heroImg).toHaveAttribute("src", "media/images/homeHero.png");
  });

  test("renders signup button", () => {
    render(<Hero />);
    const signupBtn = screen.getByRole("button", { name: /signup for free/i });
    expect(signupBtn).toBeInTheDocument();
    expect(signupBtn).toHaveClass("sign");
  });
});
