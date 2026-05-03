import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@taskflow/components';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
};

export const Checked: Story = {
  args: {
    label: 'Dark mode',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled switch',
    disabled: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Auto-save',
    helperText: 'Automatically save your changes',
  },
};

export const WithError: Story = {
  args: {
    label: 'Required setting',
    error: true,
    helperText: 'This setting must be enabled',
  },
};

export const LabelStart: Story = {
  args: {
    label: 'Wi-Fi',
    labelPlacement: 'start',
  },
};

export const Small: Story = {
  args: {
    label: 'Small switch',
    size: 'small',
  },
};
