import type { Meta, StoryObj } from '@storybook/react';
import { Rating, Stack } from '@taskflow/components';

const meta = {
  title: 'Components/Rating',
  component: Rating,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Rate this product',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Rating',
    value: 3.5,
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Average rating',
    value: 4,
    readOnly: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    value: 2,
    disabled: true,
  },
};

export const Precision: Story = {
  args: {
    label: 'Half star precision',
    defaultValue: 2.5,
    precision: 0.5,
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack spacing={2}>
      <Rating label="Small" size="small" defaultValue={3} />
      <Rating label="Medium" size="medium" defaultValue={3} />
      <Rating label="Large" size="large" defaultValue={3} />
    </Stack>
  ),
};
