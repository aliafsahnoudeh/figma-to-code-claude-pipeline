export type TaskStatus = "todo" | "in_progress" | "in_review" | "done";
export type TaskPriority = "low" | "medium" | "high" | "urgent";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar_url: string | null;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  color: string;
  created_at: string;
}

export interface Task {
  id: string;
  project_id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignee_id: string | null;
  due_date: string | null;
  tags: string[];
  created_at: string;
  updated_at: string;
}
