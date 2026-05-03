"use client";

import { useEffect, useState } from "react";

import { api } from "@/domains/shared/services/api-client";
import type { Project } from "@/domains/shared/types";

interface ProjectsState {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

export function useProjects(): ProjectsState {
  const [state, setState] = useState<ProjectsState>({
    projects: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;
    api
      .get<Project[]>("/projects")
      .then(projects => {
        if (!cancelled) setState({ projects, loading: false, error: null });
      })
      .catch((err: Error) => {
        if (!cancelled)
          setState({ projects: [], loading: false, error: err.message });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
