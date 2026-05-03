"use client";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Stack,
  Tooltip,
  Typography,
} from "@taskflow/components";

import {
  PRIORITY_COLOR,
  PRIORITY_LABEL,
  formatDueDate,
  initials,
} from "@/domains/shared/services/format";
import type { Task, User } from "@/domains/shared/types";

interface TaskCardProps {
  task: Task;
  assignee: User | null;
}

export function TaskCard({ task, assignee }: TaskCardProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        cursor: "pointer",
        transition: "border-color 120ms ease, box-shadow 120ms ease",
        "&:hover": {
          borderColor: "primary.main",
          boxShadow: 2,
        },
      }}>
      <CardContent sx={{ pb: "16px !important" }}>
        <Stack spacing={1.25}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            {task.title}
          </Typography>

          {task.tags.length > 0 && (
            <Stack direction="row" spacing={0.5} sx={{ flexWrap: "wrap" }}>
              {task.tags.map(tag => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  variant="outlined"
                  sx={{ height: 22 }}
                />
              ))}
            </Stack>
          )}

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between">
            <Stack direction="row" spacing={1} alignItems="center">
              <Chip
                label={PRIORITY_LABEL[task.priority]}
                color={PRIORITY_COLOR[task.priority]}
                size="small"
              />
              <Typography variant="caption" color="text.secondary">
                {formatDueDate(task.due_date)}
              </Typography>
            </Stack>
            {assignee ? (
              <Tooltip title={assignee.name}>
                <Avatar
                  src={assignee.avatar_url ?? undefined}
                  alt={assignee.name}
                  sx={{ width: 28, height: 28, fontSize: 12 }}>
                  {initials(assignee.name)}
                </Avatar>
              </Tooltip>
            ) : (
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  border: "1px dashed",
                  borderColor: "divider",
                }}
              />
            )}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
