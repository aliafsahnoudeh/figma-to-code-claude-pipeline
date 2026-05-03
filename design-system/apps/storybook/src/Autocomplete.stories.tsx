import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete } from '@taskflow/components';

const meta = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
];

export const Default: Story = {
  args: {
    label: 'Select an option',
    options,
  },
};

export const Multiple: Story = {
  args: {
    label: 'Select multiple',
    options,
    multiple: true,
  },
};

export const WithValue: Story = {
  args: {
    label: 'With default value',
    options,
    value: options[0],
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading...',
    options,
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    options,
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Required field',
    options,
    error: true,
    helperText: 'This field is required',
  },
};
