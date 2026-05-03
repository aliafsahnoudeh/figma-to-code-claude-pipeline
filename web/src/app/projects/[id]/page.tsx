import { Box, Container } from "@taskflow/components";

import { AppHeader } from "@/domains/shared/components/AppHeader";
import { ProjectBoard } from "@/domains/tasks/components/ProjectBoard";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <AppHeader />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <ProjectBoard projectId={id} />
      </Container>
    </Box>
  );
}
