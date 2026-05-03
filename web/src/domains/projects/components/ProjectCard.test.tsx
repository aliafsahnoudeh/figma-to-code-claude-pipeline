import { render, screen } from "@testing-library/react";

import { NextThemeProvider, ProductKey } from "@taskflow/themes";

import type { Project } from "@/domains/shared/types";

import { ProjectCard } from "./ProjectCard";

const project: Project = {
  id: "p_demo",
  name: "Demo Project",
  description: "A short description",
  color: "#6366F1",
  created_at: new Date().toISOString(),
};

function withTheme(ui: React.ReactNode) {
  return (
    <NextThemeProvider productKey={ProductKey.TaskFlow}>{ui}</NextThemeProvider>
  );
}

describe("ProjectCard", () => {
  it("renders the project name and description", () => {
    render(withTheme(<ProjectCard project={project} />));
    expect(screen.getByText("Demo Project")).toBeInTheDocument();
    expect(screen.getByText("A short description")).toBeInTheDocument();
  });

  it("links to the project detail page", () => {
    render(withTheme(<ProjectCard project={project} />));
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/projects/p_demo");
  });
});
