import type { Meta, StoryObj } from '@storybook/react';
import { Badge, Avatar, Stack } from '@taskflow/components';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Badge badgeContent={4} color="primary">
      <Avatar name="JD" />
    </Badge>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={4}>
      <Badge badgeContent={4} color="default">
        <Avatar name="D" />
      </Badge>
      <Badge badgeContent={4} color="primary">
        <Avatar name="P" />
      </Badge>
      <Badge badgeContent={4} color="secondary">
        <Avatar name="S" />
      </Badge>
      <Badge badgeContent={4} color="error">
        <Avatar name="E" />
      </Badge>
      <Badge badgeContent={4} color="warning">
        <Avatar name="W" />
      </Badge>
      <Badge badgeContent={4} color="info">
        <Avatar name="I" />
      </Badge>
      <Badge badgeContent={4} color="success">
        <Avatar name="S" />
      </Badge>
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={4}>
      <Badge badgeContent={4} variant="standard" color="primary">
        <Avatar name="ST" />
      </Badge>
      <Badge badgeContent={4} variant="dot" color="error">
        <Avatar name="DT" />
      </Badge>
    </Stack>
  ),
};

export const Max: Story = {
  render: () => (
    <Stack direction="row" spacing={4}>
      <Badge badgeContent={99} color="primary">
        <Avatar name="99" />
      </Badge>
      <Badge badgeContent={100} max={99} color="primary">
        <Avatar name="100" />
      </Badge>
      <Badge badgeContent={1000} max={999} color="primary">
        <Avatar name="1K" />
      </Badge>
    </Stack>
  ),
};
