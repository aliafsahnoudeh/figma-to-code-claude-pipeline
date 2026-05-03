"use client";

import Link from "next/link";

import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@taskflow/components";

import type { Project } from "@/domains/shared/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      style={{ textDecoration: "none", display: "block", height: "100%" }}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "transform 120ms ease, box-shadow 120ms ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: 4,
          },
        }}>
        <Box sx={{ height: 8, bgcolor: project.color }} />
        <CardContent sx={{ flex: 1 }}>
          <Stack spacing={1}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {project.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
}
