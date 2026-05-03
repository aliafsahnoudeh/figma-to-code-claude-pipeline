import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Menu, MenuItem, Button } from '@taskflow/components';

const meta = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleAPI: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    return (
      <>
        <Button onClick={(e) => setAnchorEl(e.currentTarget)}>Open Menu</Button>
        <Menu
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          items={[
            { label: 'Profile', onClick: () => console.log('Profile') },
            { label: 'Settings', onClick: () => console.log('Settings') },
            { label: 'Logout', onClick: () => console.log('Logout') },
          ]}
        />
      </>
    );
  },
};

export const CompositionalAPI: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    return (
      <>
        <Button onClick={(e) => setAnchorEl(e.currentTarget)}>Open Menu</Button>
        <Menu anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
          <MenuItem onClick={() => console.log('Profile')}>Profile</MenuItem>
          <MenuItem onClick={() => console.log('Settings')}>Settings</MenuItem>
          <MenuItem onClick={() => console.log('Logout')}>Logout</MenuItem>
        </Menu>
      </>
    );
  },
};
