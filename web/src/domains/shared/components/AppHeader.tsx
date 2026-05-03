"use client";

import {
  AppBar,
  Avatar,
  Box,
  Stack,
  Toolbar,
  Typography,
} from "@taskflow/components";

const PLACEHOLDER_AVATAR = "https://i.pravatar.cc/96?u=cyrus";

export function AppHeader() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="inherit"
      sx={{
        bgcolor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}>
      <Toolbar>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1.5}
          sx={{ flex: 1 }}>
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: 2,
              bgcolor: "primary.main",
              display: "grid",
              placeItems: "center",
              color: "common.white",
              fontWeight: 700,
            }}>
            T
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            TaskFlow
          </Typography>
        </Stack>
        <Avatar src={PLACEHOLDER_AVATAR} alt="Cyrus Achaemenid" />
      </Toolbar>
    </AppBar>
  );
}
