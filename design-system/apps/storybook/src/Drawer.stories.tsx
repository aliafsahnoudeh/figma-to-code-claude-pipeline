import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Drawer, Button, List, ListItemButton, ListItemText } from '@taskflow/components';

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Left: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer
          anchor="left"
          open={open}
          onClose={() => setOpen(false)}
          title="Menu"
          showCloseButton
        >
          <List sx={{ width: 250 }}>
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Profile" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </List>
        </Drawer>
      </>
    );
  },
};

export const Right: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Right Drawer</Button>
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <List sx={{ width: 250 }}>
            <ListItemButton>
              <ListItemText primary="Item 1" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Item 2" />
            </ListItemButton>
          </List>
        </Drawer>
      </>
    );
  },
};

export const Top: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Top Drawer</Button>
        <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
          <List sx={{ p: 2 }}>
            <ListItemButton>
              <ListItemText primary="Notification 1" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Notification 2" />
            </ListItemButton>
          </List>
        </Drawer>
      </>
    );
  },
};

export const Bottom: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Bottom Drawer</Button>
        <Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
          <List sx={{ p: 2 }}>
            <ListItemButton>
              <ListItemText primary="Option 1" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Option 2" />
            </ListItemButton>
          </List>
        </Drawer>
      </>
    );
  },
};
