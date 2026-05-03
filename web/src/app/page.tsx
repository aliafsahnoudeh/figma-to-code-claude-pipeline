import { Box, Container } from "@taskflow/components";

import { ProjectsDashboard } from "@/domains/projects/components/ProjectsDashboard";
import { AppHeader } from "@/domains/shared/components/AppHeader";

export default function HomePage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <AppHeader />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <ProjectsDashboard />
      </Container>
    </Box>
  );
}
