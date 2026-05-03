import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '@taskflow/components';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Input size (token-driven)',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    size: 'small',
    type: 'email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    helperText: 'Must be at least 8 characters',
    size: 'medium',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    value: 'invalid-email',
    error: true,
    errorMessage: 'Please enter a valid email address',
    size: 'medium',
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    required: true,
    size: 'medium',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    value: 'Cannot edit',
    disabled: true,
    size: 'medium',
  },
};

export const Multiline: Story = {
  args: {
    label: 'Description',
    multiline: true,
    rows: 4,
    placeholder: 'Enter a description...',
    size: 'medium',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width',
    fullWidth: true,
    size: 'medium',
  },
  parameters: {
    layout: 'padded',
  },
};

const ControlledTemplate = () => {
  const [value, setValue] = useState('');

  return (
    <TextField
      label="Controlled Input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      helperText={`Character count: ${value.length}`}
    />
  );
};

export const Controlled: Story = {
  render: ControlledTemplate,
};
