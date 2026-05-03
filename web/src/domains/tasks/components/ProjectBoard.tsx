"use client";

import { useMemo } from "react";

import { Box, Stack, Typography } from "@taskflow/components";

import { STATUS_ORDER } from "@/domains/shared/services/format";
import type { TaskStatus } from "@/domains/shared/types";
import { useBoardData } from "@/domains/tasks/services/use-board-data";

import { BoardColumn } from "./BoardColumn";

export function ProjectBoard({ projectId }: { projectId: string }) {
  const { project, tasks, users, loading, error } = useBoardData(projectId);

  const usersById = useMemo(
    () => new Map(users.map(u => [u.id, u])),
    [users],
  );

  const tasksByStatus = useMemo(() => {
    const map = new Map<TaskStatus, typeof tasks>();
    for (const status of STATUS_ORDER) map.set(status, []);
    for (const task of tasks) map.get(task.status)?.push(task);
    return map;
  }, [tasks]);

  if (loading) {
    return <Typography color="text.secondary">Loading board…</Typography>;
  }

  if (error || !project) {
    return (
      <Typography color="error.main">
        {error ?? "Project not found"}
      </Typography>
    );
  }

  return (
    <Stack spacing={3}>
      <Stack spacing={0.5}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Box
            sx={{
              width: 16,
              height: 16,
              borderRadius: 1,
              bgcolor: project.color,
            }}
          />
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            {project.name}
          </Typography>
        </Stack>
        <Typography variant="body1" color="text.secondary">
          {project.description}
        </Typography>
      </Stack>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          pb: 2,
        }}>
        {STATUS_ORDER.map(status => (
          <BoardColumn
            key={status}
            status={status}
            tasks={tasksByStatus.get(status) ?? []}
            usersById={usersById}
          />
        ))}
      </Box>
    </Stack>
  );
}
