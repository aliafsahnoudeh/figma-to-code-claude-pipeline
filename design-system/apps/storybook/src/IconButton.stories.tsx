import type { Meta, StoryObj } from '@storybook/react';
import { IconButton, Stack } from '@taskflow/components';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '🔍',
    tooltip: 'Search',
  },
};

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <IconButton color="default" tooltip="Default">
        ❤️
      </IconButton>
      <IconButton color="primary" tooltip="Primary">
        ❤️
      </IconButton>
      <IconButton color="secondary" tooltip="Secondary">
        ❤️
      </IconButton>
      <IconButton color="error" tooltip="Error">
        ❤️
      </IconButton>
      <IconButton color="warning" tooltip="Warning">
        ❤️
      </IconButton>
      <IconButton color="info" tooltip="Info">
        ❤️
      </IconButton>
      <IconButton color="success" tooltip="Success">
        ❤️
      </IconButton>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <IconButton size="small" tooltip="Small">
        ⚙️
      </IconButton>
      <IconButton size="medium" tooltip="Medium">
        ⚙️
      </IconButton>
      <IconButton size="large" tooltip="Large">
        ⚙️
      </IconButton>
    </Stack>
  ),
};

export const Disabled: Story = {
  args: {
    children: '🔒',
    disabled: true,
    tooltip: 'Locked',
  },
};
