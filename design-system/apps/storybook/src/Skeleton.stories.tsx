import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton, Stack, Card, CardContent, Avatar } from '@taskflow/components';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  render: () => (
    <Stack spacing={1}>
      <Skeleton variant="text" width={210} />
      <Skeleton variant="text" width={180} />
      <Skeleton variant="text" width={150} />
    </Stack>
  ),
};

export const Circular: Story = {
  render: () => <Skeleton variant="circular" width={40} height={40} />,
};

export const Rectangular: Story = {
  render: () => <Skeleton variant="rectangular" width={210} height={118} />,
};

export const Rounded: Story = {
  render: () => <Skeleton variant="rounded" width={210} height={118} />,
};

export const CardExample: Story = {
  render: () => (
    <Card sx={{ maxWidth: 345 }}>
      <Skeleton variant="rectangular" height={140} />
      <CardContent>
        <Stack spacing={1}>
          <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
          <Skeleton variant="text" />
          <Skeleton variant="text" width="60%" />
        </Stack>
      </CardContent>
    </Card>
  ),
};

export const ProfileExample: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Skeleton variant="circular" width={40} height={40} />
      <Stack flex={1} spacing={1}>
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="40%" />
      </Stack>
    </Stack>
  ),
};
