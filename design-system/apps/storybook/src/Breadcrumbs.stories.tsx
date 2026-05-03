import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs, Link, Typography } from '@taskflow/components';

const meta = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Breadcrumbs>
      <Link underline="hover" href="#">
        Home
      </Link>
      <Link underline="hover" href="#">
        Category
      </Link>
      <Typography>Current Page</Typography>
    </Breadcrumbs>
  ),
};

export const WithSeparator: Story = {
  render: () => (
    <Breadcrumbs separator="›">
      <Link underline="hover" href="#">
        Home
      </Link>
      <Link underline="hover" href="#">
        Products
      </Link>
      <Link underline="hover" href="#">
        Electronics
      </Link>
      <Typography>Laptops</Typography>
    </Breadcrumbs>
  ),
};

export const MaxItems: Story = {
  render: () => (
    <Breadcrumbs maxItems={3}>
      <Link underline="hover" href="#">
        Home
      </Link>
      <Link underline="hover" href="#">
        Level 1
      </Link>
      <Link underline="hover" href="#">
        Level 2
      </Link>
      <Link underline="hover" href="#">
        Level 3
      </Link>
      <Link underline="hover" href="#">
        Level 4
      </Link>
      <Typography>Current</Typography>
    </Breadcrumbs>
  ),
};
