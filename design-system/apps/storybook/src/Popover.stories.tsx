import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Popover, Button, Typography } from '@taskflow/components';

const meta = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    return (
      <>
        <Button onClick={(e) => setAnchorEl(e.currentTarget)}>Open Popover</Button>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 2 }}>This is popover content</Typography>
        </Popover>
      </>
    );
  },
};
