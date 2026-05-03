import type { Meta, StoryObj } from '@storybook/react';
import { Fab, Stack } from '@taskflow/components';

const meta = {
  title: 'Components/Fab',
  component: Fab,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Fab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '+',
    tooltip: 'Add',
  },
};

export const Extended: Story = {
  args: {
    variant: 'extended',
    children: '+ Add New',
  },
};

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Fab color="default" tooltip="Default">
        +
      </Fab>
      <Fab color="primary" tooltip="Primary">
        +
      </Fab>
      <Fab color="secondary" tooltip="Secondary">
        +
      </Fab>
      <Fab color="error" tooltip="Error">
        +
      </Fab>
      <Fab color="warning" tooltip="Warning">
        +
      </Fab>
      <Fab color="info" tooltip="Info">
        +
      </Fab>
      <Fab color="success" tooltip="Success">
        +
      </Fab>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Fab size="small" tooltip="Small">
        +
      </Fab>
      <Fab size="medium" tooltip="Medium">
        +
      </Fab>
      <Fab size="large" tooltip="Large">
        +
      </Fab>
    </Stack>
  ),
};
