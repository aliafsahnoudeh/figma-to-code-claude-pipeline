import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Backdrop, Button, CircularProgress } from '@taskflow/components';

const meta = {
  title: 'Components/Backdrop',
  component: Backdrop,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Backdrop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Show Backdrop</Button>
        <Backdrop open={open} onClick={() => setOpen(false)}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </>
    );
  },
};
