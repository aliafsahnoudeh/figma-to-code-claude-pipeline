"use client";

import { Box, Stack, Typography } from "@taskflow/components";

import { useProjects } from "@/domains/projects/services/use-projects";

import { ProjectCard } from "./ProjectCard";

export function ProjectsDashboard() {
  const { projects, loading, error } = useProjects();

  return (
    <Stack spacing={3}>
      <Stack spacing={0.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Projects
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Pick a project to see its tasks.
        </Typography>
      </Stack>

      {loading && (
        <Typography color="text.secondary">Loading projects…</Typography>
      )}

      {error && (
        <Typography color="error.main">
          Could not load projects: {error}
        </Typography>
      )}

      {!loading && !error && (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 2,
          }}>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Box>
      )}
    </Stack>
  );
}
