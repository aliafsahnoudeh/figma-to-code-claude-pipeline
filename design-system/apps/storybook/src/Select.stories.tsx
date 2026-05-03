import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@taskflow/components';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Select size (token-driven)',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
];

export const Default: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    size: 'small',
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: 'Select Country',
    options: countryOptions,
    placeholder: 'Choose a country',
    size: 'medium',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    value: 'us',
    size: 'medium',
  },
};

export const WithError: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    error: true,
    errorMessage: 'Please select a country',
    size: 'medium',
  },
};

export const Required: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    required: true,
    size: 'medium',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    disabled: true,
    value: 'us',
    size: 'medium',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    fullWidth: true,
    size: 'medium',
  },
  parameters: {
    layout: 'padded',
  },
};

const ControlledTemplate = () => {
  const [value, setValue] = useState<string | number>('');

  return (
    <Select
      label="Country"
      options={countryOptions}
      value={value}
      onChange={setValue}
      helperText={value ? `Selected: ${value}` : 'No selection'}
    />
  );
};

export const Controlled: Story = {
  render: ControlledTemplate,
};
