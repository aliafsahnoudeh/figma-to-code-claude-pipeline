import type { Meta, StoryObj } from '@storybook/react';
import { Chip, Stack } from '@taskflow/components';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default Chip',
  },
};

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={1} flexWrap="wrap">
      <Chip label="Default" />
      <Chip label="Primary" color="primary" />
      <Chip label="Secondary" color="secondary" />
      <Chip label="Error" color="error" />
      <Chip label="Warning" color="warning" />
      <Chip label="Info" color="info" />
      <Chip label="Success" color="success" />
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip label="Filled" variant="filled" />
      <Chip label="Outlined" variant="outlined" />
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={1} alignItems="center">
      <Chip label="Small" size="small" />
      <Chip label="Medium" size="medium" />
    </Stack>
  ),
};

export const Deletable: Story = {
  args: {
    label: 'Deletable',
    onDelete: () => alert('Delete clicked'),
  },
};

export const Clickable: Story = {
  args: {
    label: 'Clickable',
    onClick: () => alert('Chip clicked'),
  },
};
