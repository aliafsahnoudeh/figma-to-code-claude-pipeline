import type { Meta, StoryObj } from '@storybook/react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@taskflow/components';

const meta = {
  title: 'Components/AppBar',
  component: AppBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
      </Toolbar>
    </AppBar>
  ),
};

export const WithButtons: Story = {
  render: () => (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Sign Up</Button>
      </Toolbar>
    </AppBar>
  ),
};

export const Colors: Story = {
  render: () => (
    <>
      <AppBar position="static" color="primary" sx={{ mb: 2 }}>
        <Toolbar>
          <Typography variant="h6">Primary</Typography>
        </Toolbar>
      </AppBar>
      <AppBar position="static" color="secondary" sx={{ mb: 2 }}>
        <Toolbar>
          <Typography variant="h6">Secondary</Typography>
        </Toolbar>
      </AppBar>
      <AppBar position="static" color="default" sx={{ mb: 2 }}>
        <Toolbar>
          <Typography variant="h6">Default</Typography>
        </Toolbar>
      </AppBar>
    </>
  ),
};
