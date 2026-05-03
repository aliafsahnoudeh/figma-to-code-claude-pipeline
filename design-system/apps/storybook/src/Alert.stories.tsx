import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '@taskflow/components';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    severity: 'info',
    children: 'This is an informational message',
  },
};

export const Success: Story = {
  args: {
    severity: 'success',
    children: 'Your changes have been saved successfully',
  },
};

export const Warning: Story = {
  args: {
    severity: 'warning',
    children: 'Please review your information before submitting',
  },
};

export const Error: Story = {
  args: {
    severity: 'error',
    children: 'An error occurred while processing your request',
  },
};

export const WithTitle: Story = {
  args: {
    severity: 'warning',
    title: 'Important Notice',
    children: 'This action cannot be undone. Please confirm before proceeding.',
  },
};

export const Outlined: Story = {
  args: {
    severity: 'info',
    variant: 'outlined',
    children: 'This is an outlined alert variant',
  },
};

export const Filled: Story = {
  args: {
    severity: 'success',
    variant: 'filled',
    children: 'This is a filled alert variant',
  },
};

export const Closable: Story = {
  args: {
    severity: 'info',
    closable: true,
    children: 'This alert can be dismissed by clicking the close button',
  },
};
