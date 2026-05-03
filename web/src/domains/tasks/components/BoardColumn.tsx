"use client";

import { Box, Chip, Stack, Typography } from "@taskflow/components";

import { STATUS_LABEL } from "@/domains/shared/services/format";
import type { Task, TaskStatus, User } from "@/domains/shared/types";

import { TaskCard } from "./TaskCard";

interface BoardColumnProps {
  status: TaskStatus;
  tasks: Task[];
  usersById: Map<string, User>;
}

export function BoardColumn({ status, tasks, usersById }: BoardColumnProps) {
  return (
    <Box
      sx={{
        flex: "1 1 280px",
        minWidth: 280,
        bgcolor: "background.default",
        borderRadius: 2,
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
      }}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography
          variant="overline"
          sx={{ fontWeight: 700, letterSpacing: 0.6 }}>
          {STATUS_LABEL[status]}
        </Typography>
        <Chip label={tasks.length} size="small" />
      </Stack>

      <Stack spacing={1.25}>
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            assignee={
              task.assignee_id ? (usersById.get(task.assignee_id) ?? null) : null
            }
          />
        ))}
        {tasks.length === 0 && (
          <Typography variant="body2" color="text.secondary">
            No tasks here yet.
          </Typography>
        )}
      </Stack>
    </Box>
  );
}
