import type { Meta, StoryObj } from '@storybook/react';
import { Snackbar, Button, Stack } from '@taskflow/components';
import { useState } from 'react';

const meta = {
  title: 'Components/Snackbar',
  component: Snackbar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Show Snackbar</Button>
        <Snackbar
          open={open}
          message="This is a snackbar message"
          onClose={() => setOpen(false)}
          autoHideDuration={3000}
        />
      </>
    );
  },
};

export const Positions: Story = {
  render: () => {
    const [position, setPosition] = useState<any>(null);

    const positions = [
      { vertical: 'top', horizontal: 'left' },
      { vertical: 'top', horizontal: 'center' },
      { vertical: 'top', horizontal: 'right' },
      { vertical: 'bottom', horizontal: 'left' },
      { vertical: 'bottom', horizontal: 'center' },
      { vertical: 'bottom', horizontal: 'right' },
    ];

    return (
      <>
        <Stack spacing={1}>
          {positions.map((pos) => (
            <Button key={`${pos.vertical}-${pos.horizontal}`} onClick={() => setPosition(pos)}>
              {pos.vertical} - {pos.horizontal}
            </Button>
          ))}
        </Stack>
        {position && (
          <Snackbar
            open={!!position}
            message={`${position.vertical} - ${position.horizontal}`}
            onClose={() => setPosition(null)}
            autoHideDuration={2000}
            anchorOrigin={position}
          />
        )}
      </>
    );
  },
};

export const WithAction: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Show Snackbar</Button>
        <Snackbar
          open={open}
          message="Message archived"
          onClose={() => setOpen(false)}
          autoHideDuration={6000}
          action={
            <Button color="secondary" size="small" onClick={() => setOpen(false)}>
              UNDO
            </Button>
          }
        />
      </>
    );
  },
};
