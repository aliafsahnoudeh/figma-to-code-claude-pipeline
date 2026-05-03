import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, Stack } from '@taskflow/components';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithInitials: Story = {
  args: {
    name: 'John Doe',
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User avatar',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar name="JD" sx={{ width: 24, height: 24, fontSize: '0.75rem' }} />
      <Avatar name="JD" sx={{ width: 32, height: 32, fontSize: '0.875rem' }} />
      <Avatar name="JD" sx={{ width: 40, height: 40 }} />
      <Avatar name="JD" sx={{ width: 56, height: 56, fontSize: '1.25rem' }} />
      <Avatar name="JD" sx={{ width: 72, height: 72, fontSize: '1.5rem' }} />
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Avatar name="JD" variant="circular" />
      <Avatar name="JD" variant="rounded" />
      <Avatar name="JD" variant="square" />
    </Stack>
  ),
};
