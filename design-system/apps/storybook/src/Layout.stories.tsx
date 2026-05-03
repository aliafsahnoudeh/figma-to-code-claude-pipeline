import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, Grid, Container, Divider, Paper } from '@taskflow/components';

const meta = {
  title: 'Components/Layout',
  component: Box,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BoxExample: Story = {
  render: () => (
    <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
      Box Component with padding and background color
    </Box>
  ),
};

export const StackVertical: Story = {
  render: () => (
    <Stack spacing={2} sx={{ p: 2 }}>
      <Paper sx={{ p: 2 }}>Item 1</Paper>
      <Paper sx={{ p: 2 }}>Item 2</Paper>
      <Paper sx={{ p: 2 }}>Item 3</Paper>
    </Stack>
  ),
};

export const StackHorizontal: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ p: 2 }}>
      <Paper sx={{ p: 2, flex: 1 }}>Item 1</Paper>
      <Paper sx={{ p: 2, flex: 1 }}>Item 2</Paper>
      <Paper sx={{ p: 2, flex: 1 }}>Item 3</Paper>
    </Stack>
  ),
};

export const GridExample: Story = {
  render: () => (
    <Container sx={{ py: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2, height: 100 }}>Grid Item 1</Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2, height: 100 }}>Grid Item 2</Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2, height: 100 }}>Grid Item 3</Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2, height: 100 }}>Grid Item 4</Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2, height: 100 }}>Grid Item 5</Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2, height: 100 }}>Grid Item 6</Paper>
        </Grid>
      </Grid>
    </Container>
  ),
};

export const ContainerExample: Story = {
  render: () => (
    <>
      <Container maxWidth="sm" sx={{ py: 2, bgcolor: 'grey.100' }}>
        <Paper sx={{ p: 2 }}>Small Container (SM)</Paper>
      </Container>
      <Container maxWidth="md" sx={{ py: 2, bgcolor: 'grey.200' }}>
        <Paper sx={{ p: 2 }}>Medium Container (MD)</Paper>
      </Container>
      <Container maxWidth="lg" sx={{ py: 2, bgcolor: 'grey.300' }}>
        <Paper sx={{ p: 2 }}>Large Container (LG)</Paper>
      </Container>
    </>
  ),
};

export const DividerExample: Story = {
  render: () => (
    <Stack spacing={2} sx={{ p: 2 }}>
      <Box>Section 1</Box>
      <Divider />
      <Box>Section 2</Box>
      <Divider />
      <Box>Section 3</Box>
    </Stack>
  ),
};
