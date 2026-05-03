import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@taskflow/components';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description: 'Color of the button (matches theme palette colors)',
    },
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size (token-driven)',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
    variant: 'contained',
    size: 'medium',
    children: 'Primary Button',
  },
};

export const Danger: Story = {
  args: {
    color: 'error',
    variant: 'contained',
    size: 'medium',
    children: 'Delete',
  },
};

export const Outlined: Story = {
  args: {
    color: 'primary',
    variant: 'outlined',
    size: 'medium',
    children: 'Outlined Button',
  },
};

export const Text: Story = {
  args: {
    color: 'secondary',
    variant: 'text',
    size: 'medium',
    children: 'Text Button',
  },
};

export const Small: Story = {
  args: {
    color: 'primary',
    variant: 'contained',
    size: 'small',
    children: 'Small',
  },
};

export const Medium: Story = {
  args: {
    color: 'primary',
    variant: 'contained',
    size: 'medium',
    children: 'Medium',
  },
};

export const Large: Story = {
  args: {
    color: 'primary',
    variant: 'contained',
    size: 'large',
    children: 'Large',
  },
};

export const Loading: Story = {
  args: {
    color: 'primary',
    variant: 'contained',
    size: 'medium',
    loading: true,
    children: 'Loading...',
  },
};

export const Disabled: Story = {
  args: {
    color: 'primary',
    variant: 'contained',
    size: 'medium',
    disabled: true,
    children: 'Disabled',
  },
};

export const FullWidth: Story = {
  args: {
    color: 'primary',
    variant: 'contained',
    size: 'medium',
    fullWidth: true,
    children: 'Full Width Button',
  },
  parameters: {
    layout: 'padded',
  },
};
