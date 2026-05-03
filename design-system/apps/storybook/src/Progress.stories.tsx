import type { Meta, StoryObj } from '@storybook/react';
import { CircularProgress, LinearProgress, Stack } from '@taskflow/components';

const meta = {
  title: 'Components/Progress',
  component: CircularProgress,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CircularIndeterminate: Story = {
  render: () => <CircularProgress />,
};

export const CircularDeterminate: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <CircularProgress variant="determinate" value={25} />
      <CircularProgress variant="determinate" value={50} />
      <CircularProgress variant="determinate" value={75} />
      <CircularProgress variant="determinate" value={100} />
    </Stack>
  ),
};

export const CircularColors: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <CircularProgress color="primary" />
      <CircularProgress color="secondary" />
      <CircularProgress color="error" />
      <CircularProgress color="warning" />
      <CircularProgress color="info" />
      <CircularProgress color="success" />
    </Stack>
  ),
};

export const LinearIndeterminate: Story = {
  render: () => <LinearProgress />,
};

export const LinearDeterminate: Story = {
  render: () => (
    <Stack spacing={2}>
      <LinearProgress variant="determinate" value={25} />
      <LinearProgress variant="determinate" value={50} />
      <LinearProgress variant="determinate" value={75} />
      <LinearProgress variant="determinate" value={100} />
    </Stack>
  ),
};

export const LinearBuffer: Story = {
  render: () => <LinearProgress variant="buffer" value={60} valueBuffer={80} />,
};

export const LinearColors: Story = {
  render: () => (
    <Stack spacing={2}>
      <LinearProgress color="primary" />
      <LinearProgress color="secondary" />
      <LinearProgress color="error" />
      <LinearProgress color="warning" />
      <LinearProgress color="info" />
      <LinearProgress color="success" />
    </Stack>
  ),
};
