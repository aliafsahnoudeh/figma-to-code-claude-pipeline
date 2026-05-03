"use client";

import { useEffect, useState } from "react";

import { api } from "@/domains/shared/services/api-client";
import type { Project, Task, User } from "@/domains/shared/types";

interface BoardData {
  project: Project | null;
  tasks: Task[];
  users: User[];
  loading: boolean;
  error: string | null;
}

export function useBoardData(projectId: string): BoardData {
  const [state, setState] = useState<BoardData>({
    project: null,
    tasks: [],
    users: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    Promise.all([
      api.get<Project>(`/projects/${projectId}`),
      api.get<Task[]>(`/tasks?project_id=${projectId}`),
      api.get<User[]>("/users"),
    ])
      .then(([project, tasks, users]) => {
        if (!cancelled)
          setState({ project, tasks, users, loading: false, error: null });
      })
      .catch((err: Error) => {
        if (!cancelled)
          setState({
            project: null,
            tasks: [],
            users: [],
            loading: false,
            error: err.message,
          });
      });

    return () => {
      cancelled = true;
    };
  }, [projectId]);

  return state;
}
