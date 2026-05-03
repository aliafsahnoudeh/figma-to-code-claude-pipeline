import type { Meta, StoryObj } from '@storybook/react';
import { Paper, Stack, Box } from '@taskflow/components';

const meta = {
  title: 'Components/Paper',
  component: Paper,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Elevations: Story = {
  render: () => (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
        <Paper key={elevation} elevation={elevation} sx={{ p: 2, minWidth: 100 }}>
          elevation={elevation}
        </Paper>
      ))}
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Paper variant="elevation" elevation={2} sx={{ p: 2 }}>
        Elevation Variant
      </Paper>
      <Paper variant="outlined" sx={{ p: 2 }}>
        Outlined Variant
      </Paper>
    </Stack>
  ),
};

export const WithContent: Story = {
  render: () => (
    <Paper sx={{ p: 3, maxWidth: 400 }}>
      <Box component="h3" sx={{ mt: 0, mb: 2 }}>
        Paper Component
      </Box>
      <Box>
        This is a simple Paper component with some padding and content inside. It provides elevation
        and background styling.
      </Box>
    </Paper>
  ),
};
