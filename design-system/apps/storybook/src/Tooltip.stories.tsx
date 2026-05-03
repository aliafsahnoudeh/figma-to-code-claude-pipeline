import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, Button, IconButton, Stack } from '@taskflow/components';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Tooltip text',
    children: <Button>Hover over me</Button>,
  },
};

export const Placements: Story = {
  render: () => (
    <Stack spacing={2} alignItems="center" sx={{ pt: 4 }}>
      <Stack direction="row" spacing={2}>
        <Tooltip title="Top start" placement="top-start">
          <Button>Top Start</Button>
        </Tooltip>
        <Tooltip title="Top" placement="top">
          <Button>Top</Button>
        </Tooltip>
        <Tooltip title="Top end" placement="top-end">
          <Button>Top End</Button>
        </Tooltip>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Tooltip title="Left" placement="left">
          <Button>Left</Button>
        </Tooltip>
        <Button disabled>Center</Button>
        <Tooltip title="Right" placement="right">
          <Button>Right</Button>
        </Tooltip>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Tooltip title="Bottom start" placement="bottom-start">
          <Button>Bottom Start</Button>
        </Tooltip>
        <Tooltip title="Bottom" placement="bottom">
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip title="Bottom end" placement="bottom-end">
          <Button>Bottom End</Button>
        </Tooltip>
      </Stack>
    </Stack>
  ),
};

export const Arrow: Story = {
  args: {
    title: 'Tooltip with arrow',
    arrow: true,
    children: <Button>Hover over me</Button>,
  },
};
