import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@taskflow/components';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const Checked: Story = {
  args: {
    label: 'Subscribe to newsletter',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Enable notifications',
    helperText: 'You will receive email notifications',
  },
};

export const WithError: Story = {
  args: {
    label: 'I agree to the terms',
    error: true,
    helperText: 'You must accept the terms to continue',
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Select all',
    indeterminate: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small checkbox',
    size: 'small',
  },
};
