import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from '@taskflow/components';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Select an option',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
};

export const WithValue: Story = {
  args: {
    label: 'Preferred contact method',
    value: 'email',
    options: [
      { value: 'email', label: 'Email' },
      { value: 'phone', label: 'Phone' },
      { value: 'sms', label: 'SMS' },
    ],
  },
};

export const Row: Story = {
  args: {
    label: 'Size',
    row: true,
    options: [
      { value: 'small', label: 'Small' },
      { value: 'medium', label: 'Medium' },
      { value: 'large', label: 'Large' },
    ],
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Delivery method',
    helperText: 'Choose how you want to receive your order',
    options: [
      { value: 'standard', label: 'Standard (5-7 days)' },
      { value: 'express', label: 'Express (2-3 days)' },
      { value: 'overnight', label: 'Overnight' },
    ],
  },
};

export const WithError: Story = {
  args: {
    label: 'Required selection',
    error: true,
    helperText: 'Please select an option',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
  },
};

export const WithDisabledOption: Story = {
  args: {
    label: 'Subscription plan',
    options: [
      { value: 'free', label: 'Free' },
      { value: 'premium', label: 'Premium' },
      { value: 'enterprise', label: 'Enterprise (Coming Soon)', disabled: true },
    ],
  },
};
