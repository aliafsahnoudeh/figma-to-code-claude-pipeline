import type { Meta, StoryObj } from '@storybook/react';
import { List, ListItem, ListItemButton, ListItemText, Divider } from '@taskflow/components';

const meta = {
  title: 'Components/List',
  component: List,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <List>
      <ListItem>
        <ListItemText primary="Item 1" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Item 2" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Item 3" />
      </ListItem>
    </List>
  ),
};

export const WithSecondaryText: Story = {
  render: () => (
    <List>
      <ListItem>
        <ListItemText primary="Item 1" secondary="Description for item 1" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Item 2" secondary="Description for item 2" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Item 3" secondary="Description for item 3" />
      </ListItem>
    </List>
  ),
};

export const Clickable: Story = {
  render: () => (
    <List>
      <ListItemButton onClick={() => console.log('Item 1 clicked')}>
        <ListItemText primary="Clickable Item 1" />
      </ListItemButton>
      <ListItemButton onClick={() => console.log('Item 2 clicked')}>
        <ListItemText primary="Clickable Item 2" />
      </ListItemButton>
      <ListItemButton onClick={() => console.log('Item 3 clicked')}>
        <ListItemText primary="Clickable Item 3" />
      </ListItemButton>
    </List>
  ),
};

export const WithDividers: Story = {
  render: () => (
    <List>
      <ListItem>
        <ListItemText primary="Item 1" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="Item 2" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="Item 3" />
      </ListItem>
    </List>
  ),
};
