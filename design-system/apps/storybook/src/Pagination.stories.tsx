import type { Meta, StoryObj } from '@storybook/react';
import { Pagination, Stack } from '@taskflow/components';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 10,
  },
};

export const WithPage: Story = {
  args: {
    count: 10,
    page: 5,
  },
};

export const Colors: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} color="standard" />
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack spacing={2} alignItems="flex-start">
      <Pagination count={10} size="small" />
      <Pagination count={10} size="medium" />
      <Pagination count={10} size="large" />
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={10} variant="text" />
      <Pagination count={10} variant="outlined" />
    </Stack>
  ),
};
