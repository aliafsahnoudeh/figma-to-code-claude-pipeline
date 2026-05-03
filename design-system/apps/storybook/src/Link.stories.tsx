import type { Meta, StoryObj } from '@storybook/react';
import { Link, Stack } from '@taskflow/components';

const meta = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'Default Link',
  },
};

export const Colors: Story = {
  render: () => (
    <Stack spacing={1}>
      <Link href="#" color="primary">
        Primary Link
      </Link>
      <Link href="#" color="secondary">
        Secondary Link
      </Link>
      <Link href="#" color="error">
        Error Link
      </Link>
      <Link href="#" color="warning">
        Warning Link
      </Link>
      <Link href="#" color="info">
        Info Link
      </Link>
      <Link href="#" color="success">
        Success Link
      </Link>
    </Stack>
  ),
};

export const Underline: Story = {
  render: () => (
    <Stack spacing={1}>
      <Link href="#" underline="none">
        No underline
      </Link>
      <Link href="#" underline="hover">
        Underline on hover
      </Link>
      <Link href="#" underline="always">
        Always underlined
      </Link>
    </Stack>
  ),
};

export const External: Story = {
  args: {
    href: 'https://example.com',
    external: true,
    children: 'External Link (opens in new tab)',
  },
};

export const AsButton: Story = {
  args: {
    component: 'button',
    onClick: () => alert('Link clicked'),
    children: 'Button-styled Link',
  },
};
