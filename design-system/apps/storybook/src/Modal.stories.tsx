import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal, Button, Box } from '@taskflow/components';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box sx={style}>
            <h2>Modal Title</h2>
            <p>This is the modal content.</p>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </Box>
        </Modal>
      </>
    );
  },
};
