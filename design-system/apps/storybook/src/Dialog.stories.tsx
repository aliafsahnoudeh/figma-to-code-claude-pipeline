import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dialog, Button } from '@taskflow/components';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const DialogTemplate = (args: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog {...args} open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export const Default: Story = {
  render: DialogTemplate,
  args: {
    title: 'Dialog Title',
    children: 'This is the dialog content. You can put any content here.',
  },
};

export const WithActions: Story = {
  render: DialogTemplate,
  args: {
    title: 'Confirm Action',
    children: 'Are you sure you want to proceed with this action?',
    actions: (
      <>
        <Button variant="text" color="secondary">
          Cancel
        </Button>
        <Button variant="contained" color="primary">
          Confirm
        </Button>
      </>
    ),
  },
};

export const DangerAction: Story = {
  render: DialogTemplate,
  args: {
    title: 'Delete Item',
    children: 'This action cannot be undone. Are you sure you want to delete this item?',
    actions: (
      <>
        <Button variant="text" color="secondary">
          Cancel
        </Button>
        <Button variant="contained" color="error">
          Delete
        </Button>
      </>
    ),
  },
};

export const SmallDialog: Story = {
  render: DialogTemplate,
  args: {
    title: 'Small Dialog',
    maxWidth: 'xs',
    children: 'This is a small dialog.',
  },
};

export const LargeDialog: Story = {
  render: DialogTemplate,
  args: {
    title: 'Large Dialog',
    maxWidth: 'lg',
    fullWidth: true,
    children: 'This is a large dialog with full width enabled.',
  },
};

export const NoCloseButton: Story = {
  render: DialogTemplate,
  args: {
    title: 'No Close Button',
    showCloseButton: false,
    children: 'This dialog has no close button. Use the actions to close.',
    actions: (
      <Button variant="contained" color="primary">
        OK
      </Button>
    ),
  },
};
