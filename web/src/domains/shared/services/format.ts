import type { TaskPriority, TaskStatus } from "@/domains/shared/types";

export const STATUS_LABEL: Record<TaskStatus, string> = {
  todo: "To do",
  in_progress: "In progress",
  in_review: "In review",
  done: "Done",
};

export const STATUS_ORDER: TaskStatus[] = [
  "todo",
  "in_progress",
  "in_review",
  "done",
];

export const PRIORITY_LABEL: Record<TaskPriority, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
  urgent: "Urgent",
};

export const PRIORITY_COLOR: Record<
  TaskPriority,
  "default" | "info" | "warning" | "error"
> = {
  low: "default",
  medium: "info",
  high: "warning",
  urgent: "error",
};

export function initials(name: string): string {
  return name
    .split(" ")
    .map(part => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function formatDueDate(due: string | null): string {
  if (!due) return "No due date";
  const date = new Date(due);
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
}
