import type { Meta, StoryObj } from '@storybook/react';
import { Slider, Stack } from '@taskflow/components';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Volume',
    defaultValue: 30,
  },
};

export const WithValue: Story = {
  args: {
    label: 'Temperature',
    value: 50,
    min: 0,
    max: 100,
  },
};

export const Range: Story = {
  args: {
    label: 'Price Range',
    value: [20, 80],
    min: 0,
    max: 100,
  },
};

export const WithMarks: Story = {
  args: {
    label: 'Volume',
    defaultValue: 50,
    marks: [
      { value: 0, label: '0%' },
      { value: 50, label: '50%' },
      { value: 100, label: '100%' },
    ],
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled slider',
    defaultValue: 30,
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack spacing={4} sx={{ width: 300 }}>
      <Slider label="Small" size="small" defaultValue={30} />
      <Slider label="Medium" size="medium" defaultValue={50} />
    </Stack>
  ),
};
